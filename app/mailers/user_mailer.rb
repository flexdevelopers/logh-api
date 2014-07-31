class UserMailer < ActionMailer::Base
  default from: 'no-reply@loseorgohome.com'

  def welcome(user)
    @user = user
    mail to: user.email, subject: "Welcome to LoseOrGoHome.com, #{user.first_name}"
  end

  def reset(user, access_token)
    @user = user
    @access_token = access_token
    mail to: user.email, subject: "Password reset for loseorgohome.com"
  end

end
