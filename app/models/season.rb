class Season < ActiveRecord::Base
  has_many :weeks
  has_many :leagues

  validates :name, presence: true, length: { maximum: 20 }
  validates :starts_at, presence: true
  validates :ends_at, presence: true

  scope :current, -> { where('starts_at <= ?', Time.zone.now).where('ends_at > ?', Time.zone.now).order(ends_at: :asc) }

  def current?
    self.starts_at <= Time.zone.now && self.ends_at > Time.zone.now
  end

  def current_week
    # this can be nil if no weeks have started for the season
    self.weeks.started.order(starts_at: :desc)[0]
  end

end
