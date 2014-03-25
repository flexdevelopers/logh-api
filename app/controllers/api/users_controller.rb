class API::UsersController < API::BaseController
  skip_before_filter :authenticate, only: [:create]
  before_action :_verify_user, only: [:show, :update]

  # GET /api/users/1
  def show
    render json: current_user
  end

  # POST /api/users
  def create
    user = User.new(_user_params)
    if user.save
      render json: user, status: :created, location: api_user_path(user)
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/users/1
  def update
    if current_user.update(_user_params)
      head :no_content
    else
      render json: current_user.errors, status: :unprocessable_entity
    end
  end

  private

    def _verify_user
      not_authorized() unless params[:id].to_i == current_user.id
    end

    def _user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end

end
