class API::TeamsController < API::BaseController
  before_action :_set_league
  before_action :_set_team, only: [:show, :update, :destroy]
  before_action :_verify_team_ownership, only: [:show, :update, :destroy]
  before_action :_verify_league_membership, only: [:index]
  before_action :_verify_league_acceptance, only: [:create]

  # GET /api/leagues/:league_id/teams
  def index
    render json: @league.teams
  end

  # GET /api/leagues/:league_id/teams/1
  def show
    render json: @team
  end

  # POST /api/leagues/:league_id/teams
  def create
    return forbidden() unless !@league.started? && _can_add_team_to?(@league)
    @team = @league.teams.new(_team_params)
    @team.coaches << current_user
    if @team.save
      _mark_invitation_accepted() if _has_invitation_for?(@league)
      render json: @team, status: :created, location: api_league_team_path(@league, @team)
    else
      error(@team.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # PATCH/PUT /api/leagues/:league_id/teams/1
  def update
    if @team.update_attributes(_team_params)
      head :no_content
    else
      error(@team.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # DELETE /api/leagues/:league_id/teams/1
  def destroy
    @team.destroy
    head :no_content
  end

  private

    def _set_league
      @league = League.find(params[:league_id])
    end

    def _set_team
      @team = @league.teams.find(params[:id])
    end

    def _verify_league_acceptance
      forbidden() unless @league.public || (_has_invitation_for?(@league) && _has_valid_password_for?(@league))
    end

    def _verify_league_membership
      forbidden() unless _is_commish_of?(@league) || _has_team_in?(@league)
    end

    def _verify_team_ownership
      forbidden() unless _is_coach_of?(@team)
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

    def _has_valid_password_for?(league)
      league.authenticate(params[:league_password])
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
      params.require(:team).permit(:name, :paid)
    end

end
