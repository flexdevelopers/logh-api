class User < ActiveRecord::Base
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i

  before_save { first_name.downcase! }
  before_save { last_name.downcase! }
  before_save { email.downcase! }
  after_create :welcome_notification

  has_many :league_commishes
  has_many :managed_leagues, through: :league_commishes

  has_many :team_coaches
  has_many :teams, through: :team_coaches

  validates :active, inclusion: { in: [true, false] }
  validates :first_name, presence: true, length: { maximum: 15 }
  validates :last_name, presence: true, length: { maximum: 20 }
  validates :email, uniqueness: { case_sensitive: false }, format: { with: VALID_EMAIL_REGEX }
  validates :password, length: { minimum: 6, maximum: 15 }, on: :create

  has_secure_password

  def display_name
    "#{self.first_name} #{self.last_name[0,1]}."
  end

  private

  def welcome_notification
    UserMailer.welcome(self).deliver
  end

end
