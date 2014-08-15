class API::TeamsController < API::BaseController
  before_action :_set_user, only: [:alive, :dead, :index, :show]
  before_action :_set_league
  before_action :_set_team, only: [:show, :update, :message, :activate, :deactivate]
  before_action :_verify_league_acceptance, only: [:create]

  # GET /api/seasons/:season_id/teams/alive
  # GET /api/seasons/:season_id/teams/alive?league_id=:league_id
  def alive
    if params[:league_id]
      if _is_commish_of?(@league)
        @teams = @league.teams.alive.includes(:league, :picks, :coaches)
      else
        @teams = @league.teams.active.alive.includes(:league, :picks, :coaches)
      end
    else
      @teams = current_user.teams.joins(:league).where('season_id = ?', params[:season_id]).alive.includes(:league, :picks, :coaches).sort_by { |team| [team.league.name, team.name] }
    end
    # rendered via app/views/api/teams/alive.json.rabl
  end

  # GET /api/seasons/:season_id/teams/dead
  # GET /api/seasons/:season_id/teams/dead?league_id=:league_id
  def dead
    if params[:league_id]
      if _is_commish_of?(@league)
        @teams = @league.teams.dead.includes(:league, :picks, :coaches).sort_by { |team| [-team.correct_picks_count, team.name] }
      else
        @teams = @league.teams.active.dead.includes(:league, :picks, :coaches).sort_by { |team| [-team.correct_picks_count, team.name] }
      end
    else
      @teams = current_user.teams.joins(:league).where('season_id = ?', params[:season_id]).dead.includes(:league, :picks, :coaches).sort_by { |team| [team.league.name, team.name] }
    end
    # rendered via app/views/api/teams/dead.json.rabl
  end

  # GET /api/leagues/:league_id/teams
  def index
    @teams = current_user.teams.where(league: @league).includes(:league, :picks, :coaches)
    respond_with @teams # rendered via app/views/api/teams/index.json.rabl
  end

  # GET /api/leagues/:league_id/teams/1
  def show
    respond_with @team # rendered via app/views/api/teams/show.json.rabl
  end

  # POST /api/leagues/:league_id/teams
  def create
    return forbidden('The league has been closed to new teams') if !@league.open
    return forbidden("You are too late. The league's first week is already complete.") if @league.start_week.complete
    return forbidden("The league only allows #{@league.max_teams_per_user} teams per user") if !_can_add_team_to?(@league)
    @team = @league.teams.new(_team_params)
    @team.coaches << current_user
    if @team.save
      _mark_invitation_accepted() if _has_invitation_for?(@league)
      render json: { team_id: @team.id, message: { type: SUCCESS, content: "The #{@team[:name]} team has joined the #{@league[:name]} league" } }, status: :ok
    else
      error(@team.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # PATCH/PUT /api/leagues/:league_id/teams/1
  def update
    return forbidden('You cannot edit an inactive team') if !@team.active
    return forbidden('You must be a coach of the team or the commish of the league') unless _is_coach_of?(@team) || _is_commish_of?(@league)
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

    def _set_team
      @team = @league.teams.includes(:league, :picks, :coaches).find(params[:id]) if params[:id]
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
      params.require(:team).permit(:name, :message)
    end

end
