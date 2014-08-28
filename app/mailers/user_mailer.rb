class UserMailer < ActionMailer::Base
  default from: 'no-reply@loseorgohome.com'

  def welcome(user, season)
    @user = user
    @season = season
    mail to: user.email, subject: "Welcome to LoseOrGoHome.com"
  end

  def reset(user, access_token)
    @user = user
    @access_token = access_token
    mail to: user.email, subject: "Password reset for LoseOrGoHome.com"
  end

  def contact_us(message, user)
    @message = message
    @user = user
    mail to: 'jeremy@loseorgohome.com', subject: "Contact us submitted - #{Time.zone.now.strftime("%a, %b %e %l:%M %p %Z")}"
  end

end
