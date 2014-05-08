class API::SeasonsController < API::BaseController
  skip_before_filter :authenticate

  # GET /api/seasons/current
  def current
    # todo: better job of showing the current season
    @season = Season.last
    respond_with @season
  end

end

