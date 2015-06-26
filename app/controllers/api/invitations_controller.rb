class API::InvitationsController < API::BaseController
  before_action :_set_league
  before_action :_verify_league_status, except: :index

  # POST /leagues/:league_id/invitations/new
  # Create an invitation request for a league
  def new
    InvitationMailer.request_invitation(@league, _invitation_params[:email], _invitation_params[:message]).deliver
    render json: { message: { type: SUCCESS, content: "An invite request for #{_invitation_params[:email]} has been sent to the commish" } }, status: :ok
  end

  # GET /leagues/:league_id/invitations
  def index
    return forbidden('Only the commish can retrieve invites for a league') unless _is_commish_of?(@league)
    @invitations = @league.invitations.sort_by { |invite| [ invite.email ] }
    @invitations = @invitations.map { |invite| InvitationDecorator.decorate(invite, User.find_by(email: invite.email)) }
    respond_with @invitations
  end

  # POST /leagues/:league_id/invitations
  # Create one or more invitations for a league
  def create
    return forbidden('Only the commish can send an invite for a private league.') if !@league.public && !_is_commish_of?(@league)
    return forbidden('You are too late. The league is closed to new teams.') if @league.closed?
    emails = _invitation_params[:email].strip.downcase.split(/[\s,]+/)
    invite_emails = []
    emails.each do |email|
      @invitation = @league.invitations.where(email: email).first_or_initialize
      if @invitation.update_attributes({ email: email, message: _invitation_params[:message] })
        @invitation.touch # forces the updated_at field to change (needed for a resend of invitation)
        invite_emails << @invitation.email
        InvitationMailer.league_invitation(@invitation, current_user).deliver
      end
    end
    if invite_emails.length > 0
      message = "An invite has been sent to #{invite_emails.to_sentence}"
      type = SUCCESS
    else
      message = 'No valid emails were provided'
      type = WARNING
    end
    render json: { message: { type: type, content: message } }, status: :ok
  end

  # DELETE /leagues/:league_id/invitations/:id
  def destroy
    return forbidden('You cannot delete an invitation')
  end

  private

    def _set_league
      @league = League.find(params[:league_id])
    end

    def _verify_league_status
      forbidden("It is too late to send invitations.") if @league.closed?
    end

    def _is_commish_of?(league)
      current_user.managed_leagues.include?(league)
    end

    def _invitation_params
      params.require(:invitation).permit(:email, :message)
    end

end
