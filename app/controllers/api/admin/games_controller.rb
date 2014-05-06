class API::Admin::GamesController < API::GamesController
  before_action :_verify_admin

  # POST /api/admin/weeks/:week_id/games
  def create
    @game = @week.games.new(_game_params)
    if @game.save
      render json: @game, status: :created, location: api_week_game_path(@week, @game)
    else
      error(@game.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # PUT/PATCH /api/admin/weeks/:week_id/games/:id
  def update
    if @game.update(_game_params)
      head :no_content
    else
      error(@game.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # DELETE /api/admin/weeks/:week_id/games/:id
  def destroy
    @game.destroy
    head :no_content
  end

  private

    def _game_params
      params.require(:game).permit(:starts_at, :home_squad_id, :visiting_squad_id, :home_squad_score, :visiting_squad_score)
    end

    def _verify_admin
      forbidden() unless current_user.admin?
    end

end