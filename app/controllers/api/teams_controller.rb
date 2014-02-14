class API::TeamsController < ApplicationController
  before_action :set_user, only: [:index]
  before_action :set_league, only: [:index, :new, :create]
  before_action :set_team, only: [:show, :update, :destroy]

  # GET /api/teams
  # GET /api/teams.json
  # GET /api/users/:user_id/teams
  # GET /api/users/:user_id/teams.json
  # GET /api/leagues/:league_id/teams
  # GET /api/leagues/:league_id/teams.json
  def index
    if @user
      @teams = @user.teams
    elsif @league
      @teams = @league.teams
    else
      @teams = Team.all
    end
    render json: @teams
  end

  # GET /api/teams/1
  # GET /api/teams/1.json
  def show
    render json: @team
  end

  # GET /api/leagues/:league_id/teams/new
  # GET /api/leagues/:league_id/teams/new.json
  def new
    render json: {}
  end

  # POST /api/leagues/:league_id/teams
  # POST /api/leagues/:league_id/teams.json
  def create
    @team = @league.teams.new(team_params)
    if @team.save
      render json: @team, status: :created, location: api_team_path(@team)
    else
      render json: @team.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/teams/1
  # PATCH/PUT /api/teams/1.json
  def update
    if @team.update_attributes(team_params)
      head :no_content
    else
      render json: @team.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/teams/1
  # DELETE /api/teams/1.json
  def destroy
    @team.destroy
    head :no_content
  end

  private

    def set_user
      @user = User.find(params[:user_id]) if params[:user_id]
    end

    def set_league
      @league = League.find(params[:league_id]) if params[:league_id]
    end

    def set_team
      @team = Team.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def team_params
      params.require(:team).permit(:name)
    end

end
