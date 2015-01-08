class API::Admin::WeekTypesController < API::BaseController
  before_action :_verify_admin

  # GET /api/admin/week_types
  def index
    @week_types = WeekType.all
    respond_with @week_types # rendered via app/views/api/week_types/index.json.rabl
  end

  private

  def _verify_admin
    forbidden('You must be an admin') unless current_user.admin?
  end

end