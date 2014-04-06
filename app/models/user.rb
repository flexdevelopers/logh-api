class User < ActiveRecord::Base
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i

  before_save { email.downcase! }
  after_create :welcome_notification

  has_many :league_commishes
  has_many :managed_leagues, through: :league_commishes

  has_many :team_coaches
  has_many :teams, through: :team_coaches

  validates :first_name, presence: true, length: { maximum: 20 }
  validates :last_name, presence: true, length: { maximum: 20 }
  validates :email, uniqueness: { case_sensitive: false }, format: { with: VALID_EMAIL_REGEX }
  validates :password, length: { minimum: 6 }, on: :create

  has_secure_password

  private

  def welcome_notification
    UserMailer.welcome(self).deliver
  end

end
