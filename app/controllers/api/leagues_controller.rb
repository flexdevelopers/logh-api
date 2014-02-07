class API::LeaguesController < ApplicationController
  before_action :set_user, only: [:show]

  def index
    @leagues = League.find_by(user_id: params[:user_id])
    render json: @leagues
  end

  def show
    @league = @user.leagues.find(params[:id])
    render json: @league
  end

  private

    def set_user
      @user = User.find(params[:user_id])
    end
end
