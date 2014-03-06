class Week < ActiveRecord::Base
  belongs_to :season
  has_many :games
  has_many :picks
  has_many :losers

  validates :number, presence: true, numericality: { greater_than: 0 }, uniqueness: { scope: :season }
  validates :starts_at, presence: true
  validates :season, presence: true
  validates :complete, inclusion: { in: [true, false] } # weirdness with validating presence on boolean fields

  def complete=(value)
    super
    mark_picks_correct_or_not if self.complete == true
  end

  private

    def mark_picks_correct_or_not
      return if self.complete == false # only update if the week is complete

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
