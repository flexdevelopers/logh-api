class Invitation < ActiveRecord::Base
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i

  before_save { email.downcase! }

  belongs_to :league

  validates :league, presence: true
  validates :email, presence: true, uniqueness: { scope: :league_id }, format: { with: VALID_EMAIL_REGEX }
end
