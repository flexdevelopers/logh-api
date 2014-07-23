class API::SeasonsController < API::BaseController
  skip_before_filter :authenticate

  # GET /api/seasons/current
  def current
    @season = Season.where('ends_at > ?', Time.zone.now).order('ends_at ASC')[0]
    respond_with @season
  end

end

