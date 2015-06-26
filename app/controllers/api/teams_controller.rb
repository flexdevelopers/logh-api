class API::TeamsController < API::BaseController
  before_action :_set_user, only: [:all, :index, :show]
  before_action :_set_season, only: [:all]
  before_action :_set_league
  before_action :_set_team, only: [:show, :update, :message, :contact, :activate, :deactivate]
  before_action :_verify_league_acceptance, only: [:create]

  # GET /api/seasons/:season_id/teams/all
  # GET /api/seasons/:season_id/teams/all?league_id=:league_id&week_slug=:week_slug
  def all
    @week = Season.find(params[:season_id]).weeks.where(slug: params[:week_slug])[0] if params[:week_slug]
    if params[:league_id]
      if _is_commish_of?(@league)
        @teams = @league.teams.includes(:league, :picks, :coaches)
      else
        @teams = @league.teams.active.includes(:league, :picks, :coaches)
      end
    else
      @week ||= @season.current_week # if no week we need current week for 'My Teams'
      @teams = current_user.teams.joins(:league).where('season_id = ?', params[:season_id]).includes(:league, :picks, :coaches)
    end
    @teams = @teams.map { |team| TeamDecorator.decorate(team, @user, @week) }
    respond_with @teams # rendered via app/views/api/teams/all.json.rabl
  end

  # GET /api/leagues/:league_id/teams
  def index
    @teams = current_user.teams.where(league: @league).includes(:league, :picks, :coaches)
    @teams = @teams.map { |team| TeamDecorator.decorate(team, @user, @week) }
    respond_with @teams # rendered via app/views/api/teams/index.json.rabl
  end

  # GET /api/leagues/:league_id/teams/1
  def show
    @team = TeamDecorator.decorate(@team, @user, @week)
    respond_with @team # rendered via app/views/api/teams/show.json.rabl
  end

  # POST /api/leagues/:league_id/teams
  def create
    return forbidden("You are too late. The league is closed to new teams.") if @league.closed?
    return forbidden("The league only allows #{@league.max_teams_per_user} teams per user") if !_can_add_team_to?(@league)
    @team = @league.teams.new(_team_params)
    @team.coaches << current_user
    if @team.save
      _mark_invitation_accepted() if _has_invitation_for?(@league)
      LeagueMailer.team_joined(@team).deliver
      success_message = "The #{@team[:name]} team has joined the #{@league[:name]} league."
      render json: { team_id: @team.id, message: { type: SUCCESS, content: success_message } }, status: :ok
    else
      error(@team.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # PATCH/PUT /api/leagues/:league_id/teams/1
  def update
    return forbidden('Only the coach or commish can edit a team') if !_is_coach_of?(@team) && !_is_commish_of?(@league) && !current_user.admin?
    return forbidden('Only the commish can edit a dead team') if !@team.alive? && !_is_commish_of?(@league) && !current_user.admin?
    return forbidden('Only the commish can edit an inactive team') if !@team.active && !_is_commish_of?(@league) && !current_user.admin?
    if @team.update_attributes(_team_params)
      render json: { message: { type: SUCCESS, content: "#{@team[:name]} team updated" } }, status: :ok
    else
      error(@team.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # PATCH/PUT /api/leagues/:league_id/teams/1/message
  def message
    return forbidden('Only the commish can send a message to a team') if !_is_commish_of?(@league)
    if @team.update_attributes(message: _team_params[:message])
      TeamMailer.message_notify(@team).deliver if params[:emailMessage] && _team_params[:message].length > 0
      team_message = "Team message has been updated for #{@team[:name]}"
      team_message += " and emailed to the coach" if params[:emailMessage] && _team_params[:message].length > 0
      render json: { message: { type: SUCCESS, content: team_message } }, status: :ok
    else
      error(@team.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # PUT /api/leagues/:league_id/teams/1/contact
  def contact
    return forbidden('Only coaches can contact the commish') unless _is_coach_of?(@team)
    TeamMailer.contact_commish(@team, current_user, params[:contact]).deliver
    render json: { message: { type: SUCCESS, content: 'Your message has been sent to the commish' } }, status: :ok
  end

  # PUT /api/leagues/:league_id/teams/1/activate
  def activate
    return forbidden('Only the commish can activate an inactive team') if !_is_commish_of?(@league)
    if @team.update_attributes(active: true)
      TeamMailer.activate_notify(@team).deliver
      render json: { message: { type: SUCCESS, content: "#{@team[:name]} team has been reactivated" } }, status: :ok
    else
      error(@team.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # PUT /api/leagues/:league_id/teams/1/deactivate
  def deactivate
    return forbidden('Only the commish can deactivate a team') if !_is_commish_of?(@league)
    if @team.update_attributes(active: false)
      TeamMailer.deactivate_notify(@team).deliver
      render json: { message: { type: SUCCESS, content: "#{@team[:name]} team has been deactivated" } }, status: :ok
    else
      error(@team.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # DELETE /api/leagues/:league_id/teams/1
  def destroy
    return forbidden('You cannot delete a team')
  end

  private

    def _set_user
      @user = current_user
    end

    def _set_league
      @league = League.find(params[:league_id]) if params[:league_id]
    end

    def _set_season
      @season = Season.find(params[:season_id]) if params[:season_id]
    end

    def _set_team
      @team = @league.teams.includes(:league, :coaches).find(params[:id]) if params[:id]
    end

    def _verify_league_acceptance
      forbidden("An invitation has not been extended to #{current_user.email}. Please request an invitation.") unless @league.public || _is_commish_of?(@league) || _has_invitation_for?(@league)
    end

    def _is_commish_of?(league)
      current_user.managed_leagues.include?(league)
    end

    def _is_coach_of?(team)
      current_user.teams.include?(team)
    end

    def _has_team_in?(league)
      current_user_leagues = current_user.teams.map(&:league)
      current_user_leagues.include?(league)
    end

    def _has_invitation_for?(league)
      @invitation = league.invitations.find_by(email: current_user.email)
    end

    def _can_add_team_to?(league)
      return true if !league.max_teams_per_user
      current_user_teams_in_league = current_user.teams.select do |team|
        team.league.id == league.id
      end
      current_user_teams_in_league.count < league.max_teams_per_user
    end

    def _mark_invitation_accepted
      @invitation.update(accepted_at: Time.now) unless @invitation.accepted_at
    end

    def _team_params
      params.require(:team).permit(:name, :message)
    end

end
