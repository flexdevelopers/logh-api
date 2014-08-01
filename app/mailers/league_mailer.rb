class LeagueMailer < ActionMailer::Base
  default from: 'no-reply@loseorgohome.com'

  def contact_commish(league, user, message)
    @league = league
    @user = user
    @message = message
    mail to: @league.commish_emails, subject: "You have a message regarding the #{@league.name} league"
  end

  def message_notify(league)
    @league = league

    hdr = SmtpApiHeader.new
    receiver = @league.coach_emails
    hdr.addTo(receiver)

    headers['X-SMTPAPI'] =  hdr.asJSON()

    mail to: 'jeremy@loseorgohome.com', subject: "The #{@league.name} league has a new message from the commish"
  end

  def start_week_change(league)
    @league = league

    hdr = SmtpApiHeader.new
    receiver = @league.coach_emails
    hdr.addTo(receiver)

    headers['X-SMTPAPI'] =  hdr.asJSON()

    mail to: 'jeremy@loseorgohome.com', subject: "The start week for the #{@league.name} league has changed"
  end

end
