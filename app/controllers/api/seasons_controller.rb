class API::SeasonsController < API::BaseController
  skip_before_filter :authenticate

  # GET /api/seasons
  def index
    @seasons = Season.all.order(ends_at: :desc)
    respond_with @seasons # rendered via app/views/api/seasons/index.json.rabl
  end

end

