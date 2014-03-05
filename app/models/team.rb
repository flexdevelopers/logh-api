class Team < ActiveRecord::Base
  belongs_to :user
  belongs_to :league
  has_many :picks, dependent: :destroy

  validates :name, presence: true, length: { maximum: 30 }
  validates :league, presence: true
  validates :user, presence: true
  validates :alive, inclusion: { in: [true, false] }
end
