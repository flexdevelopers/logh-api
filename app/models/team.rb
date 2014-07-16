class Team < ActiveRecord::Base

  before_save { name.downcase! }

  belongs_to :league
  has_many :picks, dependent: :destroy

  has_many :team_coaches
  has_many :coaches, through: :team_coaches

  validates :name, presence: true, length: { maximum: 30 }, uniqueness: { scope: :league_id }
  validates :league, presence: true
  validates :active, inclusion: { in: [true, false] }
  validates :alive, inclusion: { in: [true, false] }
  validates :message, allow_nil: true, length: { maximum: 200 }

  default_scope { includes(:league) }
  default_scope { order("lower(#{table_name}.name)") }

  scope :alive, -> { where(alive: true) }
  scope :dead, -> { where(alive: false) }

  def commish_emails
    league.commish_emails
  end

  def coach_emails
    coach_ids = TeamCoach.where(team_id: self.id).map(&:user_id)
    User.where(id: coach_ids).map(&:email)
  end

  def coach_names
    coach_ids = TeamCoach.where(team_id: self.id).map(&:user_id)
    User.where(id: coach_ids).map(&:display_name)
  end

end
