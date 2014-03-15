class API::SessionsController < API::BaseController
  skip_before_filter :authenticate, only: [:create]

  # POST /api/sessions
  def create
    token =  current_access_token
    if _session_params[:email]
      @user = User.find_by(email: _session_params[:email])
      token.user = @user if _password_valid?
    end
    render json: token
  end

  # DELETE /api/sessions/:id
  def destroy
    current_access_token.delete!
    head :no_content
  end

  private

    def _session_params
      params.require(:session).permit(:email, :password)
    end

    def _password_valid?
      @user.authenticate(_session_params[:password])
    end

end
