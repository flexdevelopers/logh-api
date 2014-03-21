class API::LeaguesController < API::BaseController
  before_action :_set_league, only: [:show, :update, :destroy]

  # GET /api.leagues
  # GET /api/leagues.json
  def index
    render json: current_user.managed_leagues
  end

  # GET /api/leagues/1
  # GET /api/leagues/1.json
  def show
    render json: @league
  end

  # POST /api/leagues
  # POST /api/leagues.json
  def create
    @league = League.new(_league_params)
    @league.commishes << current_user
    if @league.save
      render json: @league, status: :created, location: api_league_path(@league)
    else
      render json: @league.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/leagues/1
  # PATCH/PUT /api/leagues/1.json
  def update
    if @league.update_attributes(_league_params)
      head :no_content
    else
      render json: @league.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/leagues/1
  # DELETE /api/leagues/1.json
  def destroy
    @league.destroy
    head :no_content
  end

  private

    def _set_league
      @league = current_user.managed_leagues.find(params[:id])
    end

    def _league_params
      params.require(:league).permit(:name, :season_id)
    end
end
