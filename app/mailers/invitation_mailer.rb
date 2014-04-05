class InvitationMailer < ActionMailer::Base
  default from: 'foo@loseorgohome.com', cc: 'mitchell852@gmail.com'

  def league_invitation(invitation)
    @league = invitation.league
    mail to: invitation.email, subject: 'You are invited!'
  end

end
