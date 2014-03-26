class API::Admin::UsersController < API::UsersController
  before_action :_set_user, only: [:show, :update, :destroy]

  # GET /api/admin/users/
  def index
    render json: User.all
  end

  # GET /api/admin/users/1
  def show
    render json: @user
  end

  # PATCH/PUT /api/admin/users/1
  def update
    if @user.update(_user_params)
      head :no_content
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/admin/users/:id
  def destroy
    if params[:id].to_i == current_user.id
      not_authorized()
      return
    end
    @user.destroy
    head :no_content
  end

  private

    def _set_user
      @user = User.find(params[:id])
    end

    def _verify_user
      super unless current_user.admin?
    end

end