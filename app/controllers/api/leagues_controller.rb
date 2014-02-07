class API::LeaguesController < ApplicationController
  before_action :set_user, only: [:show]
  before_action :set_league, only: [:show]

  def index
    @leagues = League.find_by(user_id: params[:user_id])
    render json: @leagues
  end

  def show
    render json: @league
  end

  private

    def set_user
      @user = User.find(params[:user_id])
    end

    def set_league
      @league = @user.leagues.find(params[:id])
    end
end
