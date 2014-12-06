class RemoveWeekHomeSquadAndVisitingSquadIndexesFromGames < ActiveRecord::Migration
  def up
    remove_index :games, [:week_id, :home_squad_id]
    remove_index :games, [:week_id, :visiting_squad_id]
  end
  def down
    add_index :games, [:week_id, :home_squad_id], unique: true
    add_index :games, [:week_id, :visiting_squad_id], unique: true
  end
end
