class API::PicksController < ApplicationController
  before_action :set_team, only: [:index, :create]
  before_action :set_pick, only: [:show, :update, :destroy]

  # GET /api/teams/:team_id/picks
  # GET /api/teams/:team_id/picks.json
  def index
    @picks = @team.picks
    render json: @picks
  end

  # GET /api/picks/1
  # GET /api/picks/1.json
  def show
    render json: @pick
  end

  # POST /api/teams/:team_id/picks
  # POST /api/teams/:team_id/picks.json
  def create
    @pick = @team.picks.new(params[:pick])
    if @pick.save
      render json: @pick, status: :created, location: api_pick_path(@pick)
    else
      render json: @pick.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/picks/1
  # PATCH/PUT /api/picks/1.json
  def update
    if @pick.update(pick_params)
      head :no_content
    else
      render json: @pick.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/picks/1
  # DELETE /api/picks/1.json
  def destroy
    @pick.destroy
    head :no_content
  end

  private

    def set_team
      @team = Team.find(params[:team_id])
    end

    def set_pick
      @pick = Pick.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def pick_params
      params.require(:pick).permit()
    end

end
