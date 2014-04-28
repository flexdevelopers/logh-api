class API::UsersController < API::BaseController
  skip_before_filter :authenticate, only: [:create]

  # GET /api/users/current
  def current
    render json: current_user
  end

  # POST /api/users
  def create
    user = User.new(_user_params)
    if user.save
      access_token = current_access_token
      access_token.user = user
      payload({ user: access_token.user, token: access_token.token }, "User created for #{access_token.user.email}")
    else
      error(WARNING, user.errors.full_messages.join(', '), :unprocessable_entity)
    end
  end

  # PUT api/users/current
  def update
    if current_user.update(_user_params)
      payload({}, 'User has been updated')
    else
      error(WARNING, current_user.errors.full_messages.join(', '), :unprocessable_entity)
    end
  end

  private

    def _user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end

end
