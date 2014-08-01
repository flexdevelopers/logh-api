class API::InvitationsController < API::BaseController
  before_action :_set_league
  before_action :_verify_league_management, except: :new
  before_action :_verify_league_status, except: :new

  # POST /leagues/:league_id/invitations/new
  def new
    InvitationMailer.request_invitation(@league, _invitation_params[:email], _invitation_params[:message]).deliver
    render json: { message: { type: SUCCESS, content: "An invite request for #{_invitation_params[:email]} has been sent to the commish" } }, status: :ok
  end

  # GET /leagues/:league_id/invitations
  def index
    @invitations = @league.invitations
    respond_with @invitations
  end

  # POST /leagues/:league_id/invitations
  def create
    @invitation = @league.invitations.where(email: _invitation_params[:email]).first_or_initialize
    if @invitation.save
      render json: { message: { type: SUCCESS, content: "An invite has been sent to #{@invitation.email}" } }, status: :ok
    else
      error(@invitation.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # DELETE /leagues/:league_id/invitations/:id
  def destroy
    return forbidden('You cannot delete an invitation')
  end

  private

    def _set_league
      @league = League.find(params[:league_id])
    end

    def _verify_league_management
      _is_commish_of?(@league)
    end

    def _verify_league_status
      forbidden('Invites cannot be sent after the league has started') if @league.started?
    end

    def _is_commish_of?(league)
      forbidden('Only the commish can send a league invite') unless current_user.managed_leagues.include?(league)
    end

    def _invitation_params
      params.require(:invitation).permit(:email, :message)
    end

end
