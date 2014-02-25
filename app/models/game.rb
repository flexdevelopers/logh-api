class Game < ActiveRecord::Base
  belongs_to :week
  belongs_to :home_squad, class_name: 'Squad', foreign_key: 'home_squad_id'
  belongs_to :visiting_squad, class_name: 'Squad', foreign_key: 'visiting_squad_id'

  after_update :set_loser

  validates :week, presence: true
  validates :start_datetime, presence: true
  validates :home_squad, presence: true
  validates :visiting_squad, presence: true

  private

    def set_loser

      return if !home_squad_score || !visiting_squad_score

      if home_squad_score < visiting_squad_score
        week.losers << Loser.create!(week: week, squad: home_squad)
      else
        week.losers << Loser.create!(week: week, squad: visiting_squad)
      end

    end

end
