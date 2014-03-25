class API::TeamsController < API::BaseController
  before_action :_set_league
  before_action :_set_team, only: [:show, :update, :destroy]
  before_action :_verify_league_membership, only: [:index]
  before_action :_verify_team_ownership, only: [:show, :update, :destroy]

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
    if _league_password_valid?
      @team = @league.teams.new(_team_params)
      @team.coaches << current_user
      if @team.save
        render json: @team, status: :created, location: api_league_team_path(@league, @team)
      else
        render json: @team.errors, status: :unprocessable_entity
      end
    else
      not_authorized()
    end
  end

  # PATCH/PUT /api/leagues/:league_id/teams/1
  def update
    if @team.update_attributes(_team_params)
      head :no_content
    else
      render json: @team.errors, status: :unprocessable_entity
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

    def _league_password_valid?
      @league && @league.authenticate(params[:league_password])
    end

    def _verify_league_membership
      not_authorized() unless _is_commish_of(@league) || _has_team_in(@league)
    end

    def _verify_team_ownership
      not_authorized() unless _is_coach_of(@team)
    end

    def _is_commish_of(league)
      current_user.managed_leagues.include?(league)
    end

    def _is_coach_of(team)
      current_user.teams.include?(team)
    end

    def _has_team_in(league)
      current_user_leagues = current_user.teams.map(&:league)
      current_user_leagues.include?(league)
    end

    def _team_params
      params.require(:team).permit(:name)
    end

end
