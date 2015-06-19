class API::StatsController < API::BaseController
  skip_before_filter :authenticate
  skip_before_filter :check_guest

  # GET /api/stats
  def index
    render json: { pickem: League.non_elimination.count, survivor: League.elimination.count, teams: Team.count, picks: Pick.count }
  end

end
