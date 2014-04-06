class InvitationMailer < ActionMailer::Base
  default from: 'no-reply@loseorgohome.com'

  def league_invitation(invitation)
    @league = invitation.league
    mail to: invitation.email, subject: 'You are invited!'
  end

end
