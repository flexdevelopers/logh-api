class LeagueMailer < ActionMailer::Base
  default from: 'no-reply@loseorgohome.com'

  def contact_commish(league, user, message)
    @league = league
    @user = user
    @message = message
    mail to: @league.commish_emails, subject: "You have a message regarding the #{@league.name} league"
  end

  def message_notify(league)
    league.coach_emails.each do |coach_email|
      send_message(league, coach_email).deliver
    end
  end

  def send_message(league, coach_email)
    # todo: need a better method for this like sendgrid
    @league = league
    mail to: coach_email, subject: "The #{@league.name} league has a new message from the commish"
  end

end
