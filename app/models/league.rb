class League < ActiveRecord::Base
  belongs_to :season

  has_many :league_commishes
  has_many :commishes, through: :league_commishes

  has_many :teams, dependent: :destroy

  validates :name, presence: true, length: { maximum: 30 }
  validates :password, length: { minimum: 6 }, on: :create
  validates :season, presence: true
  validates :max_teams_per_user, allow_nil: true, numericality: { greater_than: 0 }

  has_secure_password
end
