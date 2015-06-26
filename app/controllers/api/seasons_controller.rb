class API::SeasonsController < API::BaseController
  skip_before_filter :authenticate
  skip_before_filter :check_guest

  # GET /api/seasons
  def index
    @seasons = Season.all.order(ends_at: :desc)
    @seasons = @seasons.map { |season| SeasonDecorator.decorate(season) }
    respond_with @seasons # rendered via app/views/api/seasons/index.json.rabl
  end

end

