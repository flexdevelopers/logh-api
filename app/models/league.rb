class League < ActiveRecord::Base
  before_save { name.downcase! }

  belongs_to :season
  belongs_to :start_week, class_name: 'Week', foreign_key: 'start_week_id'

  has_many :league_commishes
  has_many :commishes, through: :league_commishes

  has_many :teams, dependent: :destroy
  has_many :invitations, dependent: :destroy

  validates :name, presence: true, length: { maximum: 25 }, uniqueness: { case_sensitive: false, scope: :season_id }
  validates :season, presence: true
  validates :open, inclusion: { in: [true, false] }
  validates :public, inclusion: { in: [true, false] }
  validates :start_week_id, presence: true
  validates :max_teams_per_user, allow_nil: true, numericality: { greater_than: 0 }
  validates :message, allow_nil: true, length: { maximum: 200 }

  default_scope { includes(:start_week).order(name: :asc) }

  scope :public, -> { where(public: true) }
  scope :private, -> { where(public: false) }
  scope :not_started, -> { joins(:start_week).where('starts_at > ?', Time.zone.now) }

  def started?
    start_week.started?
  end

  def closed?
    !self.open
  end

  def coach_emails
    emails = teams.active.map(&:coach_emails)
    emails.flatten.uniq
  end

  def commish_emails
    commish_ids = league_commishes.map(&:user_id)
    User.where(id: commish_ids).map(&:email)
  end

  def commish_names
    commish_ids = league_commishes.map(&:user_id)
    User.where(id: commish_ids).map(&:display_name)
  end

end
