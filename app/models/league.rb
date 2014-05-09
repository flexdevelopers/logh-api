class League < ActiveRecord::Base
  belongs_to :season
  belongs_to :start_week, class_name: 'Week', foreign_key: 'start_week_id'

  has_many :league_commishes
  has_many :commishes, through: :league_commishes

  has_many :teams, dependent: :destroy
  has_many :invitations, dependent: :destroy

  validates :name, presence: true, length: { maximum: 25 }, uniqueness: { scope: :season_id }
  validates :password, presence: true, length: { minimum: 6 }, on: :create, unless: :public
  validates :season, presence: true
  validates :public, inclusion: { in: [true, false] }
  validates :start_week_id, presence: true
  validates :max_teams_per_user, allow_nil: true, numericality: { greater_than: 0 }

  has_secure_password validations: false

  default_scope { order('lower(name)') }

  scope :public, -> { where(public: true) }
  scope :private, -> { where(public: false) }
  scope :not_started, -> { joins(:start_week).where('starts_at > ?', Time.zone.now.to_date) }

  def started?
    start_week.starts_at <= Time.zone.now.to_date
  end

  def week_display
    "Week #{start_week.number} (#{start_week.starts_at.strftime("%m/%d/%Y")})"
  end

end
