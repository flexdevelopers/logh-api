class Team < ActiveRecord::Base
  belongs_to :league
  has_many :picks, dependent: :destroy

  has_many :team_coaches
  has_many :coaches, through: :team_coaches

  validates :name, presence: true, length: { maximum: 30 }, uniqueness: { scope: :league_id }
  validates :league, presence: true
  validates :alive, inclusion: { in: [true, false] }

  default_scope { includes(:league) }
  default_scope { order(:name) }

  scope :alive, -> { where(alive: true) }
  scope :dead, -> { where(alive: false) }

  def coach_emails
    coach_ids = TeamCoach.where(team_id: self.id).map(&:user_id)
    User.where(id: coach_ids).map(&:email)
  end

end
