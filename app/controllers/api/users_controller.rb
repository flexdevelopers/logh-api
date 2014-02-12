class API::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :restrict_access

  # GET /api/users
  # GET /api/users.json
  def index
    @users = User.all
    render json: @users
  end

  # GET /api/users/1
  # GET /api/users/1.json
  def show
    render json: @user
  end

  # GET /api/users/new
  # GET /api/users/new.json
  def new
    @user = User.new
    render json: @user
  end

  # POST /api/users
  # POST /api/users.json
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created, location: api_user_path(@user)
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/users/1
  # PATCH/PUT /api/users/1.json
  def update
    if @user.update_attributes(user_params)
      head :no_content
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/users/1
  # DELETE /api/users/1.json
  def destroy
    @user.destroy
    head :no_content
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:email, :password)
    end

    def restrict_access
      api_key = APIKey.find_by(access_token: params[:access_token])
      head :unauthorized unless api_key
    end
end
