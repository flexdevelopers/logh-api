class AddUserIdAndLeagueIdIndexesToTeams < ActiveRecord::Migration
  def change
    add_index :teams, :user_id
    add_index :teams, :league_id
  end
end
