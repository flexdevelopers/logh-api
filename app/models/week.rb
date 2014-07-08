class Week < ActiveRecord::Base
  belongs_to :season
  belongs_to :week_type

  has_many :games
  has_many :picks
  has_many :losers

  validates :number, presence: true, numericality: { greater_than: 0 }, uniqueness: { scope: :season }
  validates :starts_at, presence: true
  validates :season, presence: true
  validates :week_type, presence: true
  validates :complete, inclusion: { in: [true, false] } # weirdness with validating presence on boolean fields

  default_scope { order('starts_at ASC') }

  scope :not_started, -> { where('starts_at > ?', Time.zone.now.to_date) }
  scope :started, -> { where('starts_at <= ?', Time.zone.now.to_date) }

  def display
    "Week #{self.number} (#{self.starts_at.strftime("%m/%d/%Y")})"
  end

  def started?
    self.starts_at <= Time.zone.now.to_date
  end

  def complete=(value)
    super
    mark_picks_correct_or_not if self.complete == true
  end

  private

    def mark_picks_correct_or_not
      return if self.complete == false # only update if the week is complete

      picks.each do |pick|
        if losers.find_by(squad: pick.squad)
          pick.correct = true
        else
          pick.correct = false
        end
        pick.save
      end
    end
end
