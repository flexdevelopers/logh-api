class API::PicksController < API::BaseController
  before_action :_set_user, only: [:regular, :playoff, :index, :selected, :show]
  before_action :_set_team, only: [:regular, :playoff, :index, :selected, :show, :create, :create_many]
  before_action :_set_pick, only: [:show]
  before_action :_set_current_week, only: [:create, :create_many]
  before_action :_verify_team_management, only: [:create, :create_many]
  before_action :_verify_team_is_active, only: [:create, :create_many]
  before_action :_verify_team_is_alive, only: [:create, :create_many]
  before_action :_verify_league_has_started, only: [:create, :create_many]

  # GET /api/teams/:team_id/picks
  def index
    @picks = @team.picks.includes(:team, :game, :squad, :week, :week_type)
    @picks = @picks.sort_by { |pick| [ pick.week.starts_at, (pick.game) ? pick.game.starts_at : 1 ] }
    respond_with @picks # rendered via app/views/api/picks/index.json.rabl
  end

  # GET /api/teams/:team_id/picks/selected
  def selected
    allow_dups = @team.league.allow_dups
    if allow_dups
      # if dups allowed, then only current picks are needed
      @picks = @team.current_picks({}).includes(:team, :game, :squad, :week, :week_type)
    else
      # if no dups, then we need all picks
      @picks = @team.picks.includes(:team, :game, :squad, :week, :week_type)
    end
    respond_with @picks # rendered via app/views/api/picks/selected.json.rabl
  end

  # GET /api/teams/:team_id/picks/1
  def show
    respond_with @pick # rendered via app/views/api/picks/show.json.rabl
  end

  # POST /api/teams/:team_id/picks
  def create
    _verify_pick_week(_pick_params[:week_id])
    return forbidden("You cannot make a pick for a game that has already started" ) if Game.find(_pick_params[:game_id]).started?
    week = Week.find(_pick_params[:week_id])
    @pick = @team.picks.where(week: week).first_or_initialize
    if @pick.persisted? # existing pick
      return forbidden("Your current pick for the week is locked. The game has already started" ) if @pick.locked?
    end
    if @pick.update_attributes(_pick_params)
      render json: { message: { type: SUCCESS, content: "You picked the #{@pick.squad.name} to lose in #{week.name} (#{week.week_type.description})." } }, status: :ok
    else
      error(@pick.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # POST /api/teams/:team_id/picks/many
  def create_many
    all_picks = params[:picks] || []
    # check to make sure they're not picking too many times
    return forbidden("You cannot make that many picks" ) if !_verify_pick_count(@team, @current_week, all_picks.length)
    # delete all unlocked picks for this week
    @team.picks.not_locked.where(week: @current_week).readonly(false).destroy_all
    # now save the new unlocked picks
    unlocked_picks = all_picks.select do |pick|
      !pick[:locked]
    end
    unlocked_picks.each do |pick|
      pick_params = ActionController::Parameters.new(pick).permit(:week_id, :game_id, :week_type_id, :squad_id)
      _verify_pick_week(pick_params[:week_id])
      return forbidden("You cannot make a pick for a game that has already started" ) if Game.find(pick_params[:game_id]).started?
      @pick = @team.picks.new(pick_params)
      if !@pick.save
        error(@pick.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
        return
      end
    end
    render json: { message: { type: SUCCESS, content: "Your picks have been updated." } }, status: :ok
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

    def _set_current_week
      @current_week = @team.league.season.current_week
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

    def _verify_pick_week(pick_week_id)
      forbidden("You can only make picks for the current week - #{@current_week.display}") if @current_week && @current_week.id != pick_week_id
    end

    def _verify_pick_count(team, current_week, pick_count)
      max_picks = team.league.max_picks_per_week
      if !max_picks
        max_picks = current_week.games.count
      end
      pick_count <= max_picks
    end

    def _is_coach_of(team)
      current_user.teams.include?(team)
    end

    def _pick_params
      params.require(:pick).permit(:week_id, :game_id, :week_type_id, :squad_id)
    end

end
