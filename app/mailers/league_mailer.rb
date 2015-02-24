class LeagueMailer < ActionMailer::Base
  default from: 'no-reply@loseorgohome.com'

  def contact_commish(league, user, message)
    @league = league
    @user = user
    @message = message
    mail to: @league.commish_emails, subject: "You have a message regarding #{@league.name}"
  end

  def message_notify(league, emailAlive, emailAll)
    @league = league
    emails = @league.coach_emails.concat(@league.commish_emails) if emailAlive && !emailAll
    emails = @league.active_coach_emails.concat(@league.commish_emails) if emailAll

    hdr = SmtpApiHeader.new
    receiver = emails
    hdr.addTo(receiver)

    headers['X-SMTPAPI'] =  hdr.asJSON()
    puts "SMTPAPI: #{hdr.asJSON()}"

    mail to: 'jeremy@loseorgohome.com', subject: "#{@league.name} has a new message from the commish"
  end

  def pick_reminder(league, week)
    @league = league
    @week = week
    emails = @league.coach_emails # these are currently coaches of active/alive teams

    hdr = SmtpApiHeader.new
    receiver = emails
    hdr.addTo(receiver)

    headers['X-SMTPAPI'] =  hdr.asJSON()
    puts "SMTPAPI: #{hdr.asJSON()}"

    mail to: 'jeremy@loseorgohome.com', subject: "#{@week.display} pick reminder for the \"#{@league.name}\""
  end

  def team_joined(team)
    @team = team
    @league = @team.league
    mail to: @league.commish_emails, subject: "A new team has joined #{@league.name}"
  end

end
