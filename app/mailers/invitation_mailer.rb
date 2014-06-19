class InvitationMailer < ActionMailer::Base
  default from: 'no-reply@loseorgohome.com'

  def league_invitation(invitation)
    @league = invitation.league
    mail to: invitation.email, subject: "You are invited, #{invitation.email}!"
  end

  def request_invitation(league, requestor_email)
    @league = league
    @requestor_email = requestor_email
    commish_emails = @league.commishes.map(&:email)
    mail to: commish_emails, subject: "An invitation has been requested for the #{league.name} league"
  end

end
