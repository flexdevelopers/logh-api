class API::SeasonsController < API::BaseController
  skip_before_filter :authenticate

  # GET /api/seasons/current
  def current
    # todo: better job of showing the current season
    respond_with Season.last
  end

end

