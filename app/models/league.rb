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
  validates :public, inclusion: { in: [true, false] }
  validates :start_week_id, presence: true
  validates :max_teams_per_user, allow_nil: true, numericality: { greater_than: 0 }
  validates :message, allow_nil: true, length: { maximum: 200 }

  default_scope { includes(:start_week) }
  default_scope { order("#{table_name}.name") }

  scope :public, -> { where(public: true) }
  scope :private, -> { where(public: false) }
  scope :not_started, -> { joins(:start_week).where('starts_at > ?', Time.zone.now.to_date) }

  def start_week_id=(start_week_id)
    super unless self.teams.count > 0 # no updating start week if teams have already joined
  end

  def started?
    start_week.started?
  end

  def commish_emails
    commish_ids = LeagueCommish.where(league_id: self.id).map(&:user_id)
    User.where(id: commish_ids).map(&:email)
  end

  def current_week
    if self.started?
      self.season.weeks.started.order('starts_at DESC')[0] # current week
    else
      self.start_week
    end
  end

end
