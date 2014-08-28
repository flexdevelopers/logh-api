class TeamMailer < ActionMailer::Base
  default from: 'no-reply@loseorgohome.com'

  def contact_commish(team, user, message)
    @team = team
    @user = user
    @message = message
    mail to: @team.league.commish_emails, subject: "You have a message from a team in #{@team.league.name}"
  end

  def activate_notify(team)
    @team = team
    @league = @team.league
    mail to: @team.coach_emails, subject: "The commish has reactivated #{@team.name}"
  end

  def deactivate_notify(team)
    @team = team
    @league = @team.league
    mail to: @team.coach_emails, subject: "The commish has deactivated #{@team.name}"
  end

  def message_notify(team)
    @team = team
    mail to: @team.coach_emails, subject: "#{@team.name} has a new message from the commish"
  end

end
