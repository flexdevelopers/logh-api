class InvitationMailer < ActionMailer::Base
  default from: 'no-reply@loseorgohome.com'

  def league_invitation(invitation, user)
    @invitation = invitation
    @user = user
    mail to: invitation.email, subject: "You have been invited to join a league at LoseOrGoHome.com"
  end

  def request_invitation(league, requestor_email, requestor_message)
    @league = league
    @requestor_email = requestor_email
    @requestor_message = requestor_message
    mail to: @league.commish_emails, subject: "An invitation has been requested for #{league.name}"
  end

end
