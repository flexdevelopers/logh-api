class League < ActiveRecord::Base
  belongs_to :user
  has_many :teams, dependent: :destroy

  validates :name, presence: true, length: { maximum: 30 }
  validates :user, presence: true
  validates :max_teams_per_user, allow_nil: true, numericality: { greater_than: 0 }
end
