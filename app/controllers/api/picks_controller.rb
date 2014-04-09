class API::PicksController < API::BaseController
  before_action :_set_team, only: [:index, :show, :create, :update, :destroy]
  before_action :_set_pick, only: [:show, :update, :destroy]
  before_action :_verify_team_ownership

  # GET /api/teams/:team_id/picks
  def index
    @picks = @team.picks
    render json: @picks
  end

  # GET /api/teams/:team_id/picks/1
  def show
    render json: @pick
  end

  # POST /api/teams/:team_id/picks
  def create
    @pick = @team.picks.new(_pick_params)
    if @pick.save
      render json: @pick, status: :created, location: api_team_pick_path(@team, @pick)
    else
      render json: @pick.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/teams/:team_id/picks/1
  def update
    if @pick.update(_pick_params)
      head :no_content
    else
      render json: @pick.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/teams/:team_id/picks/1
  def destroy
    @pick.destroy
    head :no_content
  end

  private

    def _set_team
      @team = Team.find(params[:team_id])
    end

    def _set_pick
      @pick = @team.picks.find(params[:id])
    end

    def _verify_team_ownership
      forbidden() unless _is_coach_of(@team)
    end

    def _is_coach_of(team)
      current_user.teams.include?(team)
    end

    def _pick_params
      params.require(:pick).permit(:week_id, :week_type_id, :squad_id)
    end

end
