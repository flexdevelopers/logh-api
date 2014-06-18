class API::InvitationsController < API::BaseController
  before_action :_set_league
  before_action :_set_invitation, only: :destroy
  before_action :_verify_league_management
  before_action :_verify_league_status

  # GET /leagues/:league_id/invitations
  def index
    @invitations = @league.invitations
    respond_with @invitations
  end

  # POST /leagues/:league_id/invitations
  def create
    @invitation = @league.invitations.where(email: _invitation_params[:email]).first_or_initialize
    if @invitation.save
      render json: { message: { type: SUCCESS, content: "Invitation sent to #{@invitation.email}" } }, status: :ok
    else
      error(@invitation.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
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

    def _verify_league_status
      forbidden('Invitations cannot be sent after the league has started') if @league.started?
    end

    def _is_commish_of?(league)
      forbidden('Only the commish can send invitations') unless current_user.managed_leagues.include?(league)
    end

    def _invitation_params
      params.require(:invitation).permit(:email)
    end

end
