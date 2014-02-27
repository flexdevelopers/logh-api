class Pick < ActiveRecord::Base
  belongs_to :team
  belongs_to :week
  belongs_to :loser, class_name: 'Squad', foreign_key: 'loser_id'

  validates :team, presence: true
  validates :week, presence: true
  validates :loser, presence: true

  def correct=(value)
    @correct = value
    update_team
  end

  private

    def update_team
      team.alive = @correct
    end

end
