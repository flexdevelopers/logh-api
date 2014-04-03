class API::InvitationsController < API::BaseController
  before_action :_set_league
  before_action :_set_invitation, only: :destroy
  before_action :_verify_league_management

  # GET /leagues/:league_id/invitations
  def index
    render json: @league.invitations
  end

  # POST /leagues/:league_id/invitations
  def create
    @invitation = @league.invitations.new(_invitation_params)
    if @invitation.save
      render json: @invitation, status: :created, location: api_league_invitations_path(@league, @invitation)
    else
      render json: @invitation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /leagues/:league_id/invitations/:id
  def destroy
    @invitation.destroy
    head :no_content
  end

  private

    def _set_league
      @league = League.find(params[:league_id])
    end

    def _set_invitation
      @invitation = @league.invitations.find(params[:id])
    end

    def _verify_league_management
      _is_commish_of?(@league)
    end

    def _is_commish_of?(league)
      forbidden() unless current_user.managed_leagues.include?(league)
    end

    def _invitation_params
      params.require(:invitation).permit(:email)
    end

end
