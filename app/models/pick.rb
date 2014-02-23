class Pick < ActiveRecord::Base
  belongs_to :team
  belongs_to :week
end
