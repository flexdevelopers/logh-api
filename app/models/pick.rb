class Pick < ActiveRecord::Base
  belongs_to :team
  belongs_to :week

  validates :team, presence: true
  validates :week, presence: true
end
