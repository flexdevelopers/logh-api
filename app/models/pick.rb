class Pick < ActiveRecord::Base
  belongs_to :team
  belongs_to :week
  belongs_to :game
  belongs_to :week_type
  belongs_to :squad, class_name: 'Squad', foreign_key: 'squad_id'

  validates :week, presence: true
  validates :game, presence: true
  validates :week_type, presence: true
  validates :team_id, presence: true, uniqueness: { scope: :week_id }
  validates :squad_id, presence: true, uniqueness: { scope: [:team_id, :week_type_id] }

  default_scope { includes(:game).order('games.starts_at ASC') }

  def locked?
    game.starts_at <= Time.zone.now.to_date
  end

  def coach_emails
    team.coach_emails
  end

  def correct=(value)
    super
    kill_team if self.correct == false
  end

  private

    def kill_team
      team.update(alive: false)
    end

end
