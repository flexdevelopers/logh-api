class API::SessionsController < API::BaseController
  skip_before_filter :authenticate

  # POST /api/sessions
  def create
    @user = User.find_by(email: _session_params[:email])
    return not_authorized('Invalid email or password. Please try again.') unless _password_valid?
    access_token = current_access_token
    access_token.user = @user
    render json: { token: access_token.token }
  end

  # POST /api/sessions/reset
  def reset
    @user = User.find_by(email: params[:email])
    return forbidden('Email address was not found') if !@user
    access_token = current_access_token
    access_token.user = @user
    UserMailer.reset(@user, access_token.token).deliver
    render json: { message: { type: SUCCESS, content: "Password reset link has been sent to #{@user.email}" } }, status: :ok
  end

  # DELETE /api/sessions/destroy
  def destroy
    current_access_token.delete!
    render json: { message: { type: SUCCESS, content: 'Thank you. Come again.' } }, status: :ok
  end

  private

    def _session_params
      params.require(:session).permit(:email, :password)
    end

    def _password_valid?
      @user && @user.authenticate(_session_params[:password])
    end

end
