class API::TeamsController < API::BaseController
  before_action :_set_user, only: [:alive, :dead, :index, :show]
  before_action :_set_league, except: [:alive, :dead]
  before_action :_set_team, only: [:show, :update, :activate, :deactivate]
  before_action :_verify_league_acceptance, only: [:create]

  # GET /api/seasons/:season_id/teams/alive
  # GET /api/seasons/:season_id/teams/alive?league_id=:league_id
  def alive
    if params[:league_id]
      @teams = Team.where('league_id = ?', params[:league_id]).alive
    else
      @teams = current_user.teams.joins(:league).where('season_id = ?', params[:season_id]).alive
    end
  end

  # GET /api/seasons/:season_id/teams/dead
  # GET /api/seasons/:season_id/teams/dead?league_id=:league_id
  def dead
    if params[:league_id]
      @teams = Team.where('league_id = ?', params[:league_id]).dead
    else
      @teams = current_user.teams.joins(:league).where('season_id = ?', params[:season_id]).dead
    end
  end

  # GET /api/leagues/:league_id/teams
  def index
    @teams = @league.teams
    respond_with @teams
  end

  # GET /api/leagues/:league_id/teams/1
  def show
    respond_with @team
  end

  # POST /api/leagues/:league_id/teams
  def create
    return forbidden('The league has already started') if @league.started?
    return forbidden("You have exceeded the number of teams allowed per user (#{@league.max_teams_per_user})") if !_can_add_team_to?(@league)
    @team = @league.teams.new(_team_params)
    @team.coaches << current_user
    if @team.save
      _mark_invitation_accepted() if _has_invitation_for?(@league)
      render json: { team_id: @team.id, message: { type: SUCCESS, content: "#{@team[:name]} team created in #{@league[:name]} league" } }, status: :ok
    else
      error(@team.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # PATCH/PUT /api/leagues/:league_id/teams/1
  def update
    return forbidden('You cannot edit an inactive team') if !@team.active
    return forbidden('You must be a coach of the team or the commish of the league') unless _is_coach_of?(@team) || _is_commish_of?(@league)
    return forbidden("Only the commish can edit a team after the league has started") if @league.started? && !_is_commish_of?(@league)
    if @team.update_attributes(_team_params)
      render json: { message: { type: SUCCESS, content: "#{@team[:name]} team updated" } }, status: :ok
    else
      error(@team.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # PUT /api/leagues/:league_id/teams/1/activate
  def activate
    return forbidden("Only the commish can activate an inactive team") if !_is_commish_of?(@league)
    if @team.update_attributes(active: true)
      render json: { message: { type: SUCCESS, content: "#{@team[:name]} team has been activated" } }, status: :ok
    else
      error(@team.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # PUT /api/leagues/:league_id/teams/1/deactivate
  def deactivate
    return forbidden("Only the commish can deactivate a team") if !_is_commish_of?(@league)
    if @team.update_attributes(active: false)
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
      @league = League.find(params[:league_id])
    end

    def _set_team
      @team = @league.teams.find(params[:id])
    end

    def _verify_league_acceptance
      forbidden('Private leagues require an invitation') unless @league.public || _is_commish_of?(@league) || _has_invitation_for?(@league)
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
      params.require(:team).permit(:name)
    end

end
