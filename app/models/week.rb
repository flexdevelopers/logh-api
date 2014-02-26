class Week < ActiveRecord::Base
  belongs_to :season
  has_many :games
  has_many :losers

  validates :number, presence: true, numericality: { greater_than: 0 }
  validates :season, presence: true
end
