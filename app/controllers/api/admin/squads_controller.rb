class API::Admin::SquadsController < API::SquadsController
  before_action :_verify_admin
  before_action :_set_squad, only: [:show, :update]

  # GET /api/admin/squads
  def all
    @squads = Squad.all
    respond_with @squads # rendered via app/views/api/squads/all.json.rabl
  end

  # GET /api/admin/weeks/:week_id/squads
  def index
    week = Week.find(params[:week_id])
    season = week.season
    @squads = Squad.where(squad_type: season.season_type)
    respond_with @squads # rendered via app/views/api/squads/index.json.rabl
  end

  # GET /api/admin/squads/:id
  def show
    respond_with @squad # rendered via app/views/api/squads/show.json.rabl
  end

  # POST /api/admin/squads
  def create
    @squad = Squad.new(_squad_params)
    if @squad.save
      render json: { message: { type: SUCCESS, content: "Created: #{@squad.name} [ #{@squad.abbrev} ]" } }, status: :ok
    else
      error(@squad.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # PUT/PATCH /api/admin/squads/:id
  def update
    if @squad.update(_squad_params)
      render json: { message: { type: SUCCESS, content: "Updated: #{@squad.name} [ #{@squad.abbrev} ]" } }, status: :ok
    else
      error(@game.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  private

  def _set_squad
    @squad = Squad.find(params[:id]) if params[:id]
  end

  def _squad_params
    params.require(:squad).permit(:name, :abbrev, :short, :squad_type, :wins, :losses, :ties)
  end

  def _verify_admin
    forbidden('You must be an admin') unless current_user.admin?
  end

end