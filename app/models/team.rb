class Team < ActiveRecord::Base

  before_save { name.downcase! }

  belongs_to :league
  has_many :picks, dependent: :destroy

  has_many :team_coaches
  has_many :coaches, through: :team_coaches

  validates :name, presence: true, length: { maximum: 35 }, uniqueness: { case_sensitive: false, scope: :league_id }
  validates :league, presence: true
  validates :active, inclusion: { in: [true, false] }
  validates :alive, inclusion: { in: [true, false] }
  validates :message, allow_nil: true, length: { maximum: 200 }

  default_scope -> { order(name: :asc) }

  scope :active, -> { where(active: true) }

  scope :alive, -> { where(alive: true) }
  scope :dead, -> { where(alive: false) }

  def commish_emails
    league.commish_emails
  end

  def coach_emails
    coach_ids = team_coaches.map(&:user_id)
    User.where(id: coach_ids).map(&:email)
  end

  def coach_names
    coach_ids = team_coaches.map(&:user_id)
    User.where(id: coach_ids).map(&:display_name)
  end

  def current_pick
    # this can be nil
    current_week = self.league.season.current_week
    current_week.picks.find_by(team: self) if current_week
  end

  def correct_picks_count
    self.picks.correct.count
  end

  def kill
    self.update!(alive: false)
  end

end
