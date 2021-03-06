class Week < ActiveRecord::Base
  belongs_to :season
  belongs_to :week_type

  has_many :games
  has_many :picks
  has_many :losers

  before_save { self.slug = self.name.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '') }

  validates :name, presence: true, uniqueness: { case_sensitive: false, scope: :season_id }
  validates :starts_at, presence: true
  validates :ends_at, presence: true
  validates :season, presence: true
  validates :week_type, presence: true
  validates :complete, inclusion: { in: [true, false] } # weirdness with validating presence on boolean fields

  default_scope -> { includes(:week_type) }

  scope :started, -> { where('starts_at <= ?', Time.zone.now) }
  scope :not_started, -> { where('starts_at > ?', Time.zone.now) }
  scope :not_complete, -> { where('complete = ?', false) }

  def display
    "#{self.name} [ #{self.starts_at.strftime("%b %-d")} - #{self.ends_at.strftime("%b %-d")} ]"
  end

  def date_range
    "#{self.starts_at.strftime("%b %-d")} - #{self.ends_at.strftime("%b %-d")}"
  end

  def started?
    self.starts_at <= Time.zone.now
  end

  def complete=(value)
    super
    kill_teams_with_no_pick
  end

  def kill_teams_with_no_pick

    return unless self.complete == true # only update if the week is complete

    null_squad = Squad.find_by(none: true)

    # for elimination leagues (that have started), give teams that made no pick a 'none' pick and then eliminate the team (if not already eliminated)
    self.season.leagues.elimination.started.each do |started_elimination_league|
      started_elimination_league.teams.alive.each do |alive_team|
        pick = self.picks.find_by(team: alive_team)
        if !pick
          Pick.create!(week: self, week_type: self.week_type, team: alive_team, game: nil, squad: null_squad, correct: false)
          alive_team.eliminate(self.starts_at, false)
        end
      end
    end

  end

  def remind
    self.update!(reminder_sent_at: Time.zone.now)
    self.season.leagues.started.find_each do |started_league|
      LeagueMailer.pick_reminder(started_league, self).deliver if started_league.coach_emails.any?
    end
  end

end
