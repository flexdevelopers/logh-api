class Pick < ActiveRecord::Base
  belongs_to :team
  belongs_to :week
  belongs_to :game
  belongs_to :week_type
  belongs_to :squad

  validates :week, presence: true
  validates :week_type, presence: true
  validates :game_id, allow_nil: true, uniqueness: { scope: :team_id }, if: Proc.new { |pick| pick.game }
  validates :team_id, presence: true, uniqueness: { scope: :week_id }, if: Proc.new { |pick| pick.team.league.max_picks_per_week == 1 }
  validates :squad_id, presence: true, uniqueness: { scope: [:team_id, :week_type_id] }, unless: Proc.new { |pick| pick.team.league.allow_dups || pick.squad.none? }

  default_scope { includes(:week).order('weeks.starts_at ASC') }

  scope :correct, -> { where(correct: true) }
  scope :incorrect, -> { where(correct: false) }
  scope :not_locked, -> { joins(:game).where("games.starts_at > ? OR games.postponed = ?", Time.zone.now, true) }

  scope :not_none, -> { joins(:squad).where('squads.none = ?', false) }

  def locked?
    !game || # no game means its a null pick and those picks are locked
    game.locked? # if the game is locked...so is the pick...
  end

  def coach_ids
    team.coach_ids
  end

  def coach_emails
    team.coach_emails
  end

end
