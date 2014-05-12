class AddTeamNameAndLeagueIdUniqueIndexToTeams < ActiveRecord::Migration
  def up
    add_index :teams, [:name, :league_id], unique: true
  end
  def down
    remove_index :teams, [:name, :league_id]
  end
end
