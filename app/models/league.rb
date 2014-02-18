class League < ActiveRecord::Base
  belongs_to :user
  has_many :teams, dependent: :destroy

  scope :active, -> { where(active: true) }
end
