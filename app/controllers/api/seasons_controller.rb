class API::SeasonsController < API::BaseController
  skip_before_filter :authenticate

  # GET /api/seasons/current
  def current
    @season = Season.active
    respond_with @season
  end

end

