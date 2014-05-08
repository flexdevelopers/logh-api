class API::UsersController < API::BaseController
  skip_before_filter :authenticate, only: [:create]

  # GET /api/users/current
  def current
    respond_with current_user, status: :ok
  end

  # POST /api/users
  def create
    user = User.new(_user_params)
    if user.save
      access_token = current_access_token
      access_token.user = user
      render json: { user: access_token.user, token: access_token.token, message: { type: SUCCESS, content: "User created for #{access_token.user.email}" } }, status: :ok
    else
      error(user.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # PUT api/users/current
  def update
    if current_user.update(_user_params)
      render json: { message: { type: SUCCESS, content: 'User has been updated' } }, status: :ok
    else
      error(current_user.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  private

    def _user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end

end
