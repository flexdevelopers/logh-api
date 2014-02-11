class League < ActiveRecord::Base
  belongs_to :user

  scope :active, -> { where(active: true) }
end
