class API::PicksController < API::BaseController
  before_action :_set_user, only: [:regular, :playoff, :index, :show]
  before_action :_set_team, only: [:regular, :playoff, :index, :show, :create]
  before_action :_set_pick, only: [:show]
  before_action :_verify_team_management, only: [:create]
  before_action :_verify_team_is_active, only: [:create]
  before_action :_verify_team_is_alive, only: [:create]
  before_action :_verify_league_has_started, only: [:create]
  before_action :_verify_pick_week, only: [:create]

  # GET /api/teams/:team_id/picks
  def index
    @picks = @team.picks.includes(:team, :game, :squad, :week, :week_type)
    respond_with @picks # rendered via app/views/api/picks/index.json.rabl
  end

  # GET /api/teams/:team_id/picks/1
  def show
    respond_with @pick # rendered via app/views/api/picks/show.json.rabl
  end

  # POST /api/teams/:team_id/picks
  def create
    return forbidden("You cannot make a pick for a game that has already started" ) if Game.find(_pick_params[:game_id]).started?
    week = Week.find(_pick_params[:week_id])
    @pick = @team.picks.where(week: week).first_or_initialize
    if @pick.persisted? # existing pick
      return forbidden("Your current pick for the week is locked. The game has already started" ) if @pick.locked?
    end
    if @pick.update_attributes(_pick_params)
      render json: { message: { type: SUCCESS, content: "You picked #{@pick.squad.name} to lose in #{week.display}. Good luck!" } }, status: :ok
    else
      error(@pick.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # DELETE /api/teams/:team_id/picks/1
  def destroy
    return forbidden('You cannot delete a pick')
  end

  private

    def _set_user
      @user = current_user
    end

    def _set_team
      @team = Team.find(params[:team_id])
    end

    def _set_pick
      @pick = @team.picks.find(params[:id])
    end

    def _verify_team_is_active
      forbidden('Cannot make picks for a deactivated team') if !@team.active
    end

    def _verify_team_is_alive
      forbidden('Cannot make picks for a dead team') if !@team.alive
    end

    def _verify_team_management
      forbidden('Only a coach can manage picks') unless _is_coach_of(@team)
    end

    def _verify_league_has_started
      forbidden("Hey, what did I say? No picks until the league starts - #{@team.league.start_week.display}") unless @team.league.started?
    end

    def _verify_pick_week
      current_week = @team.league.season.current_week
      forbidden("You can only make picks for the current week - #{current_week.display}") if current_week && current_week.id != _pick_params[:week_id]
    end

    def _is_coach_of(team)
      current_user.teams.include?(team)
    end

    def _pick_params
      params.require(:pick).permit(:week_id, :game_id, :week_type_id, :squad_id)
    end

end
