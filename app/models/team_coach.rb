class TeamCoach < ActiveRecord::Base
  belongs_to :coach, class_name: 'User', foreign_key: 'user_id'
  belongs_to :team
end