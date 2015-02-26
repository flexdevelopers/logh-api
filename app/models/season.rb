class Season < ActiveRecord::Base
  has_many :weeks
  has_many :leagues

  validates :name, presence: true, length: { maximum: 20 }, uniqueness: { case_sensitive: false }
  validates :starts_at, presence: true
  validates :ends_at, presence: true

  scope :current, -> { where('starts_at <= ?', Time.zone.now).where('ends_at > ?', Time.zone.now).order(ends_at: :desc) }

  def current?
    self.started? && !self.ended?
  end

  def started?
    self.starts_at <= Time.zone.now
  end

  def ended?
    self.ends_at <= Time.zone.now
  end

  def start_display
    "#{starts_at.strftime("%m/%d/%Y")}"
  end

  def end_display
    "#{ends_at.strftime("%m/%d/%Y")}"
  end

  def current_week
    # the last week to start or the first week of the season
    if self.weeks.started.length > 0
      self.weeks.started.order(starts_at: :desc)[0]
    else
      self.weeks.order(starts_at: :asc)[0]
    end
  end

end
