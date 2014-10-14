class Pick < ActiveRecord::Base
  belongs_to :team
  belongs_to :week
  belongs_to :game
  belongs_to :week_type
  belongs_to :squad

  validates :week, presence: true
  validates :week_type, presence: true
  validates :team_id, presence: true, uniqueness: { scope: :week_id }
  validates :squad_id, presence: true
  validates :squad_id, uniqueness: { scope: [:team_id, :week_type_id] }, if: Proc.new { |pick| !pick.squad.none? }

  default_scope { includes(:week).order('weeks.starts_at ASC') }

  scope :correct, -> { where(correct: true) }

  def locked?
    # no game means its a null pick and they are locked
    !game || game.started?
  end

  def coach_ids
    team.coach_ids
  end

  def coach_emails
    team.coach_emails
  end

end
