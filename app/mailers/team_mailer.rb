class TeamMailer < ActionMailer::Base
  default from: 'no-reply@loseorgohome.com'

  def activate_notify(team)
    @team = team
    @league = @team.league
    mail to: @team.coach_emails, subject: "The commish has activated the #{@team.name} team"
  end

  def deactivate_notify(team)
    @team = team
    @league = @team.league
    mail to: @team.coach_emails, subject: "The commish has deactivated the #{@team.name} team"
  end

end
