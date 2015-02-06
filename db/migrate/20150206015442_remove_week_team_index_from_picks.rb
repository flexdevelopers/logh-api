class RemoveWeekTeamIndexFromPicks < ActiveRecord::Migration
  def up
    remove_index :picks, name: "index_picks_on_week_id_and_team_id"
  end
  def down
    add_index :picks, [:week_id, :team_id], unique: true
  end
end
