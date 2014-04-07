class RemoveTeamIdAndLoserIdIndexFromPicks < ActiveRecord::Migration
  def up
    remove_index :picks, name: 'index_picks_on_team_id_and_loser_id'
  end
  def down
    add_index :picks, [:team_id, :loser_id], unique: true
  end
end
