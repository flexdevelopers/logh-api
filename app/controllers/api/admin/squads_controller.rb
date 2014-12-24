class API::Admin::SquadsController < API::BaseController
  before_action :_verify_admin

  # GET /api/admin/squads
  def index
    @squads = Squad.all
    respond_with @squads # rendered via app/views/api/squads/index.json.rabl
  end


  private

  def _verify_admin
    forbidden('You must be an admin') unless current_user.admin?
  end

end