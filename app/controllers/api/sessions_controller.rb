class API::SessionsController < API::BaseController
  skip_before_filter :authenticate

  # POST /api/sessions
  def create
    @user = User.find_by(email: _session_params[:email])
    return not_authorized('Invalid Credentials') unless _password_valid?
    access_token = current_access_token
    access_token.user = @user
    render json: {
        user: {
            id: access_token.user.id,
            email: access_token.user.email,
            first_name: access_token.user.first_name,
            last_name: access_token.user.last_name,
            admin: access_token.user.admin
        },
        token: access_token.token
    }
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
