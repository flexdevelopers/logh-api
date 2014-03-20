class LeagueCommish < ActiveRecord::Base
  belongs_to :commish, class_name: 'User', foreign_key: 'user_id'
  belongs_to :managed_league, class_name: 'League', foreign_key: 'league_id'
end