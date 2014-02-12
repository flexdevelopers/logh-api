class API::LeaguesController < ApplicationController
  before_action :set_user, only: [:index, :show, :new, :create, :update, :destroy]
  before_action :set_league, only: [:show, :update, :destroy]

  # GET /api/users/:user_id/leagues
  # GET /api/users/:user_id/leagues.json
  def index
    @leagues = @user.leagues.active
    render json: @leagues
  end

  # GET /api/users/:user_id/leagues/1
  # GET /api/users/:user_id/leagues/1.json
  def show
    render json: @league
  end

  # GET /api/users/:user_id/leagues/new
  # GET /api/users/:user_id/leagues/new.json
  def new
    @league = @user.leagues.new
    render json: @league
  end

  # POST /api/users/:user_id/leagues
  # POST /api/users/:user_id/leagues.json
  def create
    @league = @user.leagues.new(league_params)
    if @league.save
      render json: @league, status: :created, location: api_user_league_path(@user, @league)
    else
      render json: @league.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/users/:user_id/leagues/1
  # PATCH/PUT /api/users/:user_id/leagues/1.json
  def update
    if @league.update_attributes(league_params)
      head :no_content
    else
      render json: @league.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/users/:user_id/leagues/1
  # DELETE /api/users/:user_id/leagues/1.json
  def destroy
    @league.destroy
    head :no_content
  end

  private

    def set_user
      @user = User.find(params[:user_id])
    end

    def set_league
      @league = @user.leagues.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def league_params
      params.require(:league).permit(:name)
    end
end
