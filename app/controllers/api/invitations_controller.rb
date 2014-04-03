class API::InvitationsController < API::BaseController
  before_action :_set_league

  # GET /leagues/:league_id/invitations
  def index
  end

  # POST /leagues/:league_id/invitations
  def create
  end

  # DELETE /leagues/:league_id/invitations/:id
  def destroy
  end

  private
    def _set_league
      @league = League.find(params[:league_id])
    end

    def invitation_params
      params.require(:invitation).permit(:league_id, :email)
    end
end
