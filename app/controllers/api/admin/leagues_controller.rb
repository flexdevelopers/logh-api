class API::Admin::LeaguesController < API::LeaguesController
  before_action :_verify_admin

  # GET /api/admin/seasons/:season_id/leagues
  def index
    @leagues = @season.leagues.includes(:teams, :start_week)
    @leagues = @leagues.sort_by { |league| [ league.start_week.starts_at, league.name ] }
    @leagues = @leagues.map { |league| LeagueDecorator.decorate(league) }
    respond_with @leagues # rendered via app/views/api/leagues/index.json.rabl
  end

  private

  def _verify_admin
    forbidden('You must be an admin') unless current_user.admin?
  end

end