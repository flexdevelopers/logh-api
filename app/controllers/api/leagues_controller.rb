class API::LeaguesController < API::BaseController
  before_action :_set_season
  before_action :_set_league, only: [:show, :update, :destroy]
  before_action :_verify_league_management, only: [:update, :destroy]
  before_action :_verify_start_week, only: [:create, :update]

  # GET /api/seasons/:season_id/leagues
  def index
    render json: @season.leagues
  end

  # GET /api/seasons/:season_id/leagues/1
  def show
    payload({ league: @league })
  end

  # POST /api/seasons/:season_id/leagues
  def create
    @league = @season.leagues.new(_league_params)
    @league.commishes << current_user
    if @league.save
      payload({ league_id: @league.id }, "#{@league[:name]} league created")
    else
      error(@league.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # PATCH/PUT /api/seasons/:season_id/leagues/1
  def update
    return forbidden() if @league.started?
    if @league.update(_league_params)
      payload({}, "#{@league[:name]} league updated")
    else
      error(@league.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # DELETE /api/seasons/:season_id/leagues/1
  def destroy
    @league.destroy
    head :no_content
  end

  private

    def _league_params
      params.require(:league).permit(:name, :public, :start_week_id, :password, :max_teams_per_user)
    end

    def _set_season
      @season = Season.find(params[:season_id])
    end

    def _set_league
      @league = @season.leagues.find(params[:id])
    end

    def _verify_league_management
      forbidden('Only the commish can update a league') unless _is_commish_of(@league)
    end

    def _verify_start_week
      start_week = Week.find(_league_params[:start_week_id])
      forbidden() unless start_week.starts_at.to_date > Time.zone.now.to_date
    end

    def _is_commish_of(league)
      current_user.managed_leagues.include?(league)
    end

    def _has_team_in(league)
      current_user_leagues = current_user.teams.map(&:league)
      current_user_leagues.include?(league)
    end

end
