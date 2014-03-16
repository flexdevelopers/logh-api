class API::UsersController < API::BaseController
  skip_before_filter :authenticate, only: [:create]

  # GET /api/users
  # GET /api/users.json
  def index
    render json: User.all
  end

  # GET /api/users/1
  # GET /api/users/1.json
  def show
    render json: current_user
  end

  # POST /api/users
  # POST /api/users.json
  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: :created, location: api_user_path(user)
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/users/1
  # PATCH/PUT /api/users/1.json
  def update
    if current_user.update_attributes(user_params)
      head :no_content
    else
      render json: current_user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/users/1
  # DELETE /api/users/1.json
  def destroy
    current_user.destroy
    head :no_content
  end

  private

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end

end
