class API::Admin::GamesController < API::GamesController
  before_action :_verify_admin

  # POST /api/admin/weeks/:week_id/games
  def create
    @game = @week.games.new(_game_params)
    if @game.save
      render json: { message: { type: SUCCESS, content: "Created: #{@game.display} on #{@game.start_display}" } }, status: :ok
    else
      error(@game.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # PUT/PATCH /api/admin/weeks/:week_id/games/:id
  def update
    if @game.update(_game_params) # this kicks off some fun. see game.rb#afterupdate
      render json: { message: { type: SUCCESS, content: "Game has been updated" } }, status: :ok
    else
      error(@game.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # DELETE /api/admin/weeks/:week_id/games/:id
  def destroy
    return forbidden('You cannot delete a game')
  end

  private

    def _game_params
      params.require(:game).permit(:starts_at, :home_squad_id, :visiting_squad_id, :home_squad_score, :visiting_squad_score, :overtimes, :shootout, :complete)
    end

    def _verify_admin
      forbidden('You must be an admin') unless current_user.admin?
    end

end