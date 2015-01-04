class API::Admin::SeasonsController < API::SeasonsController
  skip_before_filter :authenticate, only: :index
  before_action :_set_season, only: [:show, :update, :destroy]
  before_action :_verify_admin, except: :index

  # GET /api/admin/seasons
  def index
    @seasons = Season.all
    render json: @seasons
  end

  # GET /api/admin/seasons/:id
  def show
    respond_with @season # rendered via app/views/api/seasons/show.json.rabl
  end

  # POST /api/admin/seasons
  def create
    @season = Season.new(_season_params)
    if @season.save
      render json: { message: { type: SUCCESS, content: "Season has been created" } }, status: :ok
    else
      error(@season.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # PATCH/PUT /api/admin/seasons/:id
  def update
    if @season.update(_season_params)
      head :no_content
    else
      error(@season.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # DELETE /api/admin/seasons/:id
  def destroy
    return forbidden('You cannot delete a season')
  end

  private

    def _season_params
      params.require(:season).permit(:name, :season_type, :starts_at, :ends_at)
    end

    def _set_season
      @season = Season.find(params[:id])
    end

    def _verify_admin
      forbidden() unless current_user.admin?
    end

end

