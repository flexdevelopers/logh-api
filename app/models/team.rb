class Team < ActiveRecord::Base
  belongs_to :league
  has_many :picks, dependent: :destroy

  has_many :team_coaches
  has_many :coaches, through: :team_coaches

  validates :name, presence: true, length: { maximum: 30 }, uniqueness: { scope: :league_id }
  validates :league, presence: true
  validates :alive, inclusion: { in: [true, false] }

  default_scope { includes(:league) }

  scope :alive, -> { where(alive: true) }
  scope :dead, -> { where(alive: false) }

end
