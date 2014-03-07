class Loser < ActiveRecord::Base
  belongs_to :week
  belongs_to :squad

  validates :week, presence: true
  validates :squad_id, presence: true, uniqueness: { scope: :week_id }
end
