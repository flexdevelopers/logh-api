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

  scope :started, -> { where('starts_at <= ?', Time.zone.now) }
  scope :not_complete, -> { where('complete = ?', false) }

  def display
    "Week #{self.number} (#{self.starts_at.strftime("%b %-d")} - #{self.ends_at.strftime("%b %-d")})"
  end

  def started?
    self.starts_at <= Time.zone.now
  end

  def complete=(value)
    super
    kill_teams_with_no_pick
  end

  private

    def kill_teams_with_no_pick
      return unless self.complete == true # only update if the week is complete

      begin
        transaction do
          self.season.leagues.each do |season_league|
            season_league.teams.alive.each do |alive_team|
              pick = self.picks.find_by(team: alive_team)
              if !pick
                alive_team.kill # the team made no pick so kill it
              end
            end
          end
        end
      rescue => e
        puts "Game update failed"
      end

    end
end
