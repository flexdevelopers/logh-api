class API::LeaguesController < ApplicationController
  def index
    @leagues = League.find_by(user_id: params[:user_id])
    render json: @leagues
  end
end
