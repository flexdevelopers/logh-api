class API::Admin::SquadsController < API::SquadsController
  before_action :_verify_admin
  before_action :_set_squad, only: [:show]

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

  private

  def _set_squad
    @season = Squad.find(params[:id]) if params[:id]
  end

  def _verify_admin
    forbidden('You must be an admin') unless current_user.admin?
  end

end