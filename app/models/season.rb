class Season < ActiveRecord::Base
  has_many :weeks

  validates :name, presence: true, length: { maximum: 20 }
end
