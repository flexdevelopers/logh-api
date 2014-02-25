class Loser < ActiveRecord::Base
  belongs_to :week
  belongs_to :squad

  validates :week, presence: true
  validates :squad, presence: true
end
