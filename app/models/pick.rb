class Pick < ActiveRecord::Base
  belongs_to :team
  belongs_to :week
  belongs_to :loser, class_name: 'Squad', foreign_key: 'loser_id'

  validates :week, presence: true
  validates :team_id, presence: true, uniqueness: { scope: :week_id }
  validates :loser_id, presence: true, uniqueness: { scope: :team_id }

  def correct=(value)
    super
    kill_team if self.correct == false
  end

  private

    def kill_team
      team.update(alive: false)
    end

end
