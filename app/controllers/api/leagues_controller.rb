class API::LeaguesController < API::BaseController
  before_action :_set_season
  before_action :_set_league, only: [:show, :update, :destroy]
  before_action :_verify_league_membership, only: [:show]
  before_action :_verify_league_management, only: [:update, :destroy]
  before_action :_verify_start_week, only: [:create, :update]

  # GET /api/seasons/:season_id/leagues
  def index
    render json: @season.leagues
  end

  # GET /api/seasons/:season_id/leagues/1
  def show
    render json: @league
  end

  # POST /api/seasons/:season_id/leagues
  def create
    @league = @season.leagues.new(_league_params)
    @league.commishes << current_user
    if @league.save
      render json: @league, status: :created, location: api_season_league_path(@season, @league)
    else
      render json: @league.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/seasons/:season_id/leagues/1
  def update
    return forbidden() if @league.started?
    if @league.update(_league_params)
      head :no_content
    else
      render json: @league.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/seasons/:season_id/leagues/1
  def destroy
    @league.destroy
    head :no_content
  end

  private

    def _set_season
      @season = Season.find(params[:season_id])
    end

    def _set_league
      @league = @season.leagues.find(params[:id])
    end

    def _verify_league_membership
      forbidden() unless _is_commish_of(@league) || _has_team_in(@league)
    end

    def _verify_league_management
      forbidden() unless _is_commish_of(@league)
    end

    def _verify_start_week
      start_week = Week.find(_league_params[:start_week_id])
      forbidden() unless start_week.starts_at.to_date > Time.zone.now.to_date
    end

    def _is_commish_of(league)
      current_user.managed_leagues.include?(league)
    end

    def _has_team_in(league)
      current_user_leagues = current_user.teams.map(&:league)
      current_user_leagues.include?(league)
    end

    def _league_params
      params.require(:league).permit(:name, :start_week_id, :password, :password_confirmation)
    end

end
