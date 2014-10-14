class RemoveSquadIdIndexFromPicks < ActiveRecord::Migration
  def up
    remove_index :picks, name: 'index_picks_on_team_id_and_squad_id_and_week_type_id'
  end
  def down
    add_index :picks, [:team_id, :squad_id, :week_type_id], unique: true
  end
end
