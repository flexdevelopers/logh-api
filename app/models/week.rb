class Week < ActiveRecord::Base
  belongs_to :season
  has_many :games
  has_many :picks
  has_many :losers

  validates :number, presence: true, numericality: { greater_than: 0 }, uniqueness: { scope: :season }
  validates :season, presence: true

  def complete=(value)
    super
    update_picks
  end

  private

    def update_picks
      picks.each do |pick|
        if losers.find_by(squad: pick.loser)
          pick.correct = true
        else
          pick.correct = false
        end
        pick.save
      end
    end
end
