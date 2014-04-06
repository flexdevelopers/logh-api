class UserMailer < ActionMailer::Base
  default from: 'no-reply@loseorgohome.com'

  def welcome(user)
    @user = user
    mail to: user.email, subject: "Welcome to LoseOrGoHome.com, #{user.first_name}"
  end

end
