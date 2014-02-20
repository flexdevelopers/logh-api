class User < ActiveRecord::Base
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i

  has_many :leagues
  has_many :teams

  validates :email, uniqueness: { case_sensitive: false }, format: { with: VALID_EMAIL_REGEX }
end
