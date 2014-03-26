class API::Admin::LeaguesController < API::LeaguesController
  skip_before_action :_set_season
  before_action :_verify_admin

  # GET /api/admin/leagues
  def index
    render json: League.all
  end

  private

  def _verify_admin
    not_authorized() unless current_user.admin?
  end

end