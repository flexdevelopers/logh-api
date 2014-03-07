class AddWeekHomeSquadAndVisitingSquadIndexesToGames < ActiveRecord::Migration
  def up
    add_index :games, [:week_id, :home_squad_id], unique: true
    add_index :games, [:week_id, :visiting_squad_id], unique: true
  end
  def down
    remove_index :games, [:week_id, :home_squad_id]
    remove_index :games, [:week_id, :visiting_squad_id]
  end
end
