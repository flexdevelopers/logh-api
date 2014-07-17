class API::Admin::WeeksController < API::WeeksController
  before_action :_set_week, only: [:update]
  before_action :_verify_admin

  # POST /api/admin/seasons/:season_id/weeks
  def create
    @week = @season.weeks.new(_week_params)
    if @week.save
      render json: @week, status: :created, location: api_admin_season_week_path(@season, @week)
    else
      error(@week.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # PATCH/PUT /api/admin/seasons/:season_id/weeks/:id
  def update
    if @week.update(_week_params)
      head :no_content
    else
      error(@week.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # DELETE /api/admin/seasons/:season_id/weeks/:id
  def destroy
    return forbidden('You cannot delete a week')
  end

  private

    def _verify_admin
      forbidden('You must be an admin') unless current_user.admin?
    end

end
