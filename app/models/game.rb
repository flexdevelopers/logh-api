class Game < ActiveRecord::Base
  belongs_to :week
  belongs_to :home_squad, class_name: 'Squad', foreign_key: 'home_squad_id'
  belongs_to :visiting_squad, class_name: 'Squad', foreign_key: 'visiting_squad_id'

  has_many :picks

  after_create :ensure_no_squad_duplication
  after_update :set_loser

  validates :week, presence: true
  validates :starts_at, presence: true
  validates :home_squad_id, presence: true, uniqueness: { scope: :week_id }
  validates :visiting_squad_id, presence: true, uniqueness: { scope: :week_id }
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
        Rabl.render(Squad.find_by(id: self.visiting_squad_id), 'api/squads/show', { format: :hash, view_path: Rails.root.join('app/views') }),
        Rabl.render(Squad.find_by(id: self.home_squad_id), 'api/squads/show', { format: :hash, view_path: Rails.root.join('app/views') })
    ]
  end

  private

    def ensure_no_squad_duplication
      week.games.each do |game|
        if game != self
          game_squads = [ game.home_squad, game.visiting_squad ]
          # an exception will roll back the create to ensure squads are not duplicated across games
          raise Exception.new if game_squads.include?(home_squad) || game_squads.include?(visiting_squad)
        end
      end
    end

    def set_loser

      begin
        transaction do

          remove_game_squads_from_losers()

          if home_squad_score < visiting_squad_score
            self.week.losers.create!(week: week, game: self, squad: home_squad)
          elsif visiting_squad_score < home_squad_score
            self.week.losers.create!(week: week, game: self, squad: visiting_squad)
          end

          clean_house()

        end
      rescue => e
        puts "Game update failed"
      end

    end

    # mark picks correct or not and kill teams with bad or no picks
    # teams with no pick is handled in week.complete=()
    def clean_house

      return unless self.complete

      self.picks.each do |game_pick|
        if self.week.losers.find_by(squad_id: game_pick.squad_id)
          game_pick.update!(correct: true)
        else
          game_pick.update!(correct: false)
          team = Team.find(game_pick.team_id)
          team.kill # the team made a bad pick so kill it
        end

      end

    end

    def remove_game_squads_from_losers
      self.week.losers.each do |loser|
        loser.destroy! if loser.game.id === self.id
      end
    end

end
