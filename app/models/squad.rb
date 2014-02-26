class Squad < ActiveRecord::Base
  validates :name, presence: true, length: { maximum: 30 }
  validates :abbrev, presence: true, length: { is: 3 }
end
