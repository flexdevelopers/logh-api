class API::PicksController < ApplicationController

  def index
    @team = Team.find(params[:team_id])
    @picks = @team.picks
    render json: @picks
  end

  def show
    @pick = Pick.find(params[:id])
    render json: @pick
  end

  def create
    @team = Team.find(params[:team_id])
    @pick = @team.picks.new(params[:pick])
    if @pick.save
      render json: @pick, status: :created, location: api_pick_path(@pick)
    else
      render json: @pick.errors, status: :unprocessable_entity
    end
  end

  def update
    @pick = Pick.find(params[:id])
    if @pick.update(pick_params)
      head :no_content
    else
      render json: @pick.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @pick = Pick.find(params[:id])
    @pick.destroy
    head :no_content
  end

  private

    def pick_params
      params.require(:pick).permit(:team)
    end

end
