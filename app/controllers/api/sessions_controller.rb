class API::SessionsController < API::BaseController
  skip_before_filter :authenticate

  # POST /api/sessions
  def create
    @user = User.find_by(email: _session_params[:email])
    return not_authorized() unless _password_valid?
    access_token = current_access_token
    access_token.user = @user
    payload({ email: access_token.user.email, admin: access_token.user.admin, token: access_token.token })
  end

  # DELETE /api/sessions/destroy
  def destroy
    current_access_token.delete!
    payload({}, 'Thank you. Come again.')
  end

  private

    def _session_params
      params.require(:session).permit(:email, :password)
    end

    def _password_valid?
      @user && @user.authenticate(_session_params[:password])
    end

end
