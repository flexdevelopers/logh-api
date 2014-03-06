class Pick < ActiveRecord::Base
  belongs_to :team
  belongs_to :week
  belongs_to :loser, class_name: 'Squad', foreign_key: 'loser_id'

  validates :week, presence: true
  validates :team, presence: true, uniqueness: { scope: :week }
  validates :loser, presence: true, uniqueness: { scope: :team }

  def correct=(value)
    super
    kill_team if self.correct == false
  end

  private

    def kill_team
      team.update(alive: false)
    end

end
