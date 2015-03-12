class API::LeaguesController < API::BaseController
  before_action :_set_season
  before_action :_set_league, only: [:show, :update, :message, :contact]
  before_action :_verify_season_is_active, only: [:create, :update]
  before_action :_verify_league_management, only: [:update, :message]
  before_action :_verify_start_week, only: [:create]

  # GET /api/seasons/:season_id/leagues/managed
  def managed
    @leagues = current_user.managed_leagues.includes(:teams, :start_week)
    @leagues = @leagues.sort_by { |league| [ league.start_week.starts_at, league.name ] }
    respond_with @leagues # rendered via app/views/api/leagues/managed.json.rabl
  end

  # GET /api/seasons/:season_id/leagues/public
  def public
    # include survivor leagues where start week is not complete
    @leagues = @season.leagues.public.elimination.start_week_not_complete.includes(:teams, :start_week)
    # include pick'em leagues where season is not complete
    @leagues.concat(@season.leagues.public.non_elimination.season_not_complete.includes(:teams, :start_week))
    @leagues = @leagues.sort_by { |league| [ Time.zone.now - league.start_week.starts_at, league.name ] }
    respond_with @leagues # rendered via app/views/api/leagues/public.json.rabl
  end

  # GET /api/seasons/:season_id/leagues/private
  def private
    # include survivor leagues where start week is not complete
    @leagues = @season.leagues.private.elimination.start_week_not_complete.includes(:teams, :start_week)
    # include pick'em leagues where season is not complete
    @leagues.concat(@season.leagues.private.non_elimination.season_not_complete.includes(:teams, :start_week))
    @leagues = @leagues.sort_by { |league| [ Time.zone.now - league.start_week.starts_at, league.name ] }
    respond_with @leagues # rendered via app/views/api/leagues/private.json.rabl
  end

  # GET /api/seasons/:season_id/leagues
  def index
    # get the leagues that you have a team in AND the leagues that you manage for the given season
    teams = current_user.teams.joins(:league).where('season_id = ?', @season.id).includes(:league)
    managed_leagues = current_user.managed_leagues.select { |managed_league| managed_league.season_id == @season.id }
    @leagues = (teams.map(&:league) + managed_leagues)
    @leagues = @leagues.uniq.sort_by { |league| [ league.name ] }
    respond_with @leagues # rendered via app/views/api/leagues/index.json.rabl
  end

  # GET /api/seasons/:season_id/leagues/1
  def show
    respond_with @league # rendered via app/views/api/leagues/show.json.rabl
  end

  # POST /api/seasons/:season_id/leagues
  def create
    if (_league_params[:nickname] && _league_params[:nickname].length > 0)
      # nickname is not a real field. only a spam catcher
      return forbidden()
    end
    @league = @season.leagues.new(_league_params.except(:nickname))
    @league.commishes << current_user
    if @league.save
      render json: { league_id: @league.id, message: { type: SUCCESS, content: "#{@league[:name]} league created" } }, status: :ok
    else
      error(@league.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # PATCH/PUT /api/seasons/:season_id/leagues/1
  def update
    if @league.started?
      league_params = _league_params.except(:start_week_id, :elimination) # no updating the start week or format after the league has started
    else
      league_params = _league_params
    end
    if @league.update(league_params)
      render json: { message: { type: SUCCESS, content: "#{@league[:name]} league updated" } }, status: :ok
    else
      error(@league.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # PUT /api/seasons/:season_id/leagues/1/message
  def message
    if @league.update_attributes(message: _league_params[:message])
      emailAlive = params[:emailAlive]
      emailAll = params[:emailAll]
      LeagueMailer.message_notify(@league, emailAlive, emailAll).deliver if (emailAlive || emailAll) && _league_params[:message].length > 0
      league_message = "League message has been updated for #{@league[:name]}"
      league_message += " and emailed to all the coaches of alive teams" if emailAlive && !emailAll && _league_params[:message].length > 0
      league_message += " and emailed to all the coaches" if emailAll && _league_params[:message].length > 0
      render json: { message: { type: SUCCESS, content: league_message } }, status: :ok
    else
      error(@league.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # PUT /api/seasons/:season_id/leagues/1/contact
  def contact
    return forbidden('Only league members can contact the commish') unless _is_commish_of(@league) || _has_team_in(@league)
    LeagueMailer.contact_commish(@league, current_user, params[:contact]).deliver
    render json: { message: { type: SUCCESS, content: 'Your message has been sent to the commish' } }, status: :ok
  end

  # DELETE /api/seasons/:season_id/leagues/1
  def destroy
    return forbidden('You cannot delete a league')
  end

  private

    def _league_params
      params.require(:league).permit(:name, :nickname, :public, :elimination, :start_week_id, :max_teams_per_user, :max_picks_per_week, :message)
    end

    def _set_season
      @season = Season.find(params[:season_id])
    end

    def _set_league
      @league = @season.leagues.includes(:teams, :start_week).find(params[:id])
    end

    def _verify_season_is_active
      forbidden('Can only create a league in the current season') unless @season.current?
    end

    def _verify_league_management
      forbidden('Only the commish can update a league') unless _is_commish_of(@league) || current_user.admin?
    end

    def _verify_start_week
      start_week = Week.find(_league_params[:start_week_id])
      forbidden('Start week is invalid') if start_week.complete
    end

    def _is_commish_of(league)
      current_user.managed_leagues.include?(league)
    end

    def _has_team_in(league)
      current_user_leagues = current_user.teams.map(&:league)
      current_user_leagues.include?(league)
    end

end
