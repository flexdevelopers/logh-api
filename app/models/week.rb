class Week < ActiveRecord::Base
  belongs_to :season
  belongs_to :week_type

  has_many :games
  has_many :picks
  has_many :losers

  validates :number, presence: true, numericality: { greater_than: 0 }, uniqueness: { scope: :season }
  validates :starts_at, presence: true
  validates :ends_at, presence: true
  validates :season, presence: true
  validates :week_type, presence: true
  validates :complete, inclusion: { in: [true, false] } # weirdness with validating presence on boolean fields

  scope :not_started, -> { where('starts_at > ?', Time.zone.now) }
  scope :started, -> { where('starts_at <= ?', Time.zone.now) }

  def display
    "Week #{self.number} (#{self.starts_at.strftime("%b %-d")} - #{self.ends_at.strftime("%b %-d")})"
  end

  def started?
    self.starts_at <= Time.zone.now
  end

  def complete=(value)
    super
    mark_picks_correct_or_not if self.complete == true
  end

  private

    def mark_picks_correct_or_not
      return if self.complete == false # only update if the week is complete

      self.season.leagues.each do |season_league|
        season_league.teams.alive.each do |alive_team|
          pick = self.picks.find_by(team: alive_team)
          if !pick
            alive_team.kill # the team made no pick so kill it
            next
          end
          if self.losers.find_by(squad_id: pick.squad_id)
            pick.update(correct: true)
          else
            pick.update(correct: false)
            alive_team.kill # the team made a bad pick so kill it
          end
        end
      end
    end
end
