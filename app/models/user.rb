class User < ActiveRecord::Base
  has_many :leagues
  has_many :teams

  validates :email, uniqueness: { case_sensitive: false }
end
