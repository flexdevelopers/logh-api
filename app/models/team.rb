class Team < ActiveRecord::Base
  belongs_to :user
  belongs_to :league
  has_many :picks, dependent: :destroy

  validates :user, presence: true
end
