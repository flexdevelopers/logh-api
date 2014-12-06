class Game < ActiveRecord::Base
  belongs_to :week
  belongs_to :visiting_squad, class_name: 'Squad', foreign_key: 'visiting_squad_id'
  belongs_to :home_squad, class_name: 'Squad', foreign_key: 'home_squad_id'
  belongs_to :loser_squad, class_name: 'Squad', foreign_key: 'loser_squad_id'

  has_many :picks

  after_update :set_loser, :update_picks

  validates :week, presence: true
  validates :starts_at, presence: true
  validates :home_squad_id, presence: true
  validates :visiting_squad_id, presence: true
  validates :home_squad_score, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :visiting_squad_score, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :complete, inclusion: { in: [true, false] }

  default_scope { order(starts_at: :asc) }

  def display
    "#{visiting_squad.name} @ #{home_squad.name}"
  end

  def start_display
    "#{starts_at.strftime("%a, %b %e %l:%M %p %Z")}"
  end

  def started?
    self.starts_at <= Time.zone.now
  end

  def week_type_id
    week.week_type_id
  end

  def squads
    # visiting squad first, followed by home squad
    [
        Rabl.render(self.visiting_squad, 'api/squads/show', { format: :hash, view_path: Rails.root.join('app/views') }),
        Rabl.render(self.home_squad, 'api/squads/show', { format: :hash, view_path: Rails.root.join('app/views') })
    ]
  end

  private

    def set_loser

      return unless self.complete

      if home_squad_score < visiting_squad_score
        self.update_column(:loser_squad_id, home_squad.id)
        home_squad.update_column(:losses, home_squad.losses + 1)
        visiting_squad.update_column(:wins, visiting_squad.wins + 1)
      elsif visiting_squad_score < home_squad_score
        self.update_column(:loser_squad_id, visiting_squad.id)
        home_squad.update_column(:wins, home_squad.wins + 1)
        visiting_squad.update_column(:losses, visiting_squad.losses + 1)
      elsif visiting_squad_score == home_squad_score
        home_squad.update_column(:ties, home_squad.ties + 1)
        visiting_squad.update_column(:ties, visiting_squad.ties + 1)
      end

    end

    def update_picks

      return unless self.complete

      picks.each do |pick|
        pick_correct = (pick.squad == self.loser_squad)
        pick.update!(correct: pick_correct)
        pick.team.kill unless pick_correct
      end

    end

end
