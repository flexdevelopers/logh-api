class Team < ActiveRecord::Base

  before_save { name.downcase! }

  belongs_to :league
  has_many :picks, dependent: :destroy

  has_many :team_coaches
  has_many :coaches, through: :team_coaches

  validates :name, presence: true, length: { maximum: 30 }, uniqueness: { case_sensitive: false, scope: :league_id }
  validates :league, presence: true
  validates :active, inclusion: { in: [true, false] }
  validates :paid, inclusion: { in: [true, false] }
  validates :message, allow_nil: true, length: { maximum: 500 }

  default_scope -> { order(name: :asc) }

  scope :active, -> { where(active: true) }
  scope :alive, -> { where(eliminated_at: nil) }

  def alive?
    !self.eliminated_at
  end

  def commish_ids
    league.commish_ids
  end

  def commish_emails
    league.commish_emails
  end

  def coach_ids
    @coach_ids ||= coaches.map(&:id)
  end

  def coach_emails
    @coach_emails ||= coaches.map(&:email)
  end

  def coach_names
    @coach_names ||= coaches.map(&:display_name)
  end

  def current_picks(options)
    # this can be nil
    if options[:week_id]
      self.picks.not_none.where('week_id = ?', options[:week_id])
    else
      self.current_week.picks.not_none.where(team: self)
    end
  end

  def current_week
    self.league.season.current_week
  end

  def correct_picks_count(options)
    week_id = options[:week_id]
    elimination = options[:elimination]
    if week_id
      if elimination
        week = Week.find(week_id)
        self.picks.correct.joins(:week).where('starts_at <= ?', week[:starts_at]).count
      else
        self.picks.correct.where('week_id = ?', week_id).count
      end
    else
      self.picks.correct.count
    end
  end

  def eliminate(eliminated_at, tie)
    self.update!(eliminated_at: eliminated_at) if self.league.elimination && self.alive? && (!tie || (tie && self.league.eliminate_on_tie))
  end

end
