class API::Admin::GamesController < API::BaseController

  before_action :set_week
  before_action :set_game, only: [:show, :update, :destroy]

  # GET /api/admin/weeks/:week_id/games
  def index
    @games = @week.games
    render json: @games
  end

  # GET /api/admin/weeks/:week_id/games/:id
  def show
    render json: @game
  end

  # POST /api/admin/weeks/:week_id/games
  def create
    @game = @week.games.new(game_params)
    if @game.save
      render json: @game, status: :created, location: api_admin_week_game_path(@week, @game)
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  # PUT/PATCH /api/admin/weeks/:week_id/games/:id
  def update
    if @game.update(game_params)
      head :no_content
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/admin/weeks/:week_id/games/:id
  def destroy
    @game.destroy
    head :no_content
  end

  private

    def game_params
      params.require(:game).permit(:starts_at, :home_squad_id, :visiting_squad_id, :home_squad_score, :visiting_squad_score)
    end

    def set_week
      @week = Week.find(params[:week_id])
    end

    def set_game
      @game = @week.games.find(params[:id])
    end

end
