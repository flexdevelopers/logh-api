class API::SessionsController < API::BaseController
  skip_before_filter :authenticate, only: [:create]

  # POST /api/sessions
  def create
    email = session_params[:email].downcase if session_params[:email]
    password = session_params[:password]
    user = User.find_by(email: email)
    if user && user.authenticate(password)
      session[:user_id] = user.id
      render json: { message: 'welcome' }, status: :created
    else
      render json: { message: 'take a hike' }, status: :unprocessable_entity
    end

  end

  # DELETE /api/sessions/:id
  def destroy

  end

  private

    def session_params
      params.require(:session).permit(:email, :password)
    end

end
