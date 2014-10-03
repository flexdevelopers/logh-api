class League < ActiveRecord::Base
  before_save { name.downcase! }

  belongs_to :season
  belongs_to :start_week, class_name: 'Week', foreign_key: 'start_week_id'

  has_many :league_commishes
  has_many :commishes, through: :league_commishes

  has_many :teams, dependent: :destroy
  has_many :invitations, dependent: :destroy

  validates :name, presence: true, length: { maximum: 30 }, uniqueness: { case_sensitive: false, scope: :season_id }
  validates :season, presence: true
  validates :open, inclusion: { in: [true, false] }
  validates :public, inclusion: { in: [true, false] }
  validates :elimination, inclusion: { in: [true, false] }
  validates :start_week_id, presence: true
  validates :max_teams_per_user, allow_nil: true, numericality: { greater_than: 0 }
  validates :message, allow_nil: true, length: { maximum: 500 }

  default_scope -> { order(name: :asc) }

  scope :public, -> { where(public: true) }
  scope :private, -> { where(public: false) }

  scope :started, -> { joins(:start_week).where('starts_at <= ?', Time.zone.now) }
  scope :start_week_not_complete, -> { joins(:start_week).where('complete = ?', false) }

  def started?
    start_week.started?
  end

  def coach_emails
    emails = teams.active.alive.map(&:coach_emails)
    emails.flatten.uniq
  end

  def commish_ids
    @commish_ids ||= commishes.map(&:id)
  end

  def commish_emails
    @commish_emails ||= commishes.map(&:email)
  end

  def commish_names
    @commish_names ||= commishes.map(&:display_name)
  end

  def active_team_count
    @active_team_count ||= teams.active.count
  end

end
