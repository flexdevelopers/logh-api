class API::TeamsController < API::BaseController
  before_action :set_league, only: [:index, :show, :create, :update, :destroy]
  before_action :set_team, only: [:show, :update, :destroy]

  # GET /api/leagues/:league_id/teams
  # GET /api/leagues/:league_id/teams.json
  def index
    render json: @league.teams
  end

  # GET /api/leagues/:league_id/teams/1
  # GET /api/leagues/:league_id/teams/1.json
  def show
    render json: @team
  end

  # POST /api/leagues/:league_id/teams
  # POST /api/leagues/:league_id/teams.json
  def create
    @team = @league.teams.new(team_params)
    if @team.save
      render json: @team, status: :created, location: api_league_team_path(@league, @team)
    else
      render json: @team.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/leagues/:league_id/teams/1
  # PATCH/PUT /api/leagues/:league_id/teams/1.json
  def update
    if @team.update_attributes(team_params)
      head :no_content
    else
      render json: @team.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/leagues/:league_id/teams/1
  # DELETE /api/leagues/:league_id/teams/1.json
  def destroy
    @team.destroy
    head :no_content
  end

  private

    def set_league
      @league = League.find(params[:league_id]) if params[:league_id]
    end

    def set_team
      @team = @league.teams.find(params[:id])
    end

    def team_params
      params.require(:team).permit(:name, :user_id)
    end

end
