class API::StatsController < API::BaseController
  skip_before_filter :authenticate

  # GET /api/stats
  def index
    render json: { public: League.public.count, private: League.private.count, teams: Team.count, picks: Pick.count }
  end

end
