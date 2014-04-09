class RemoveSquadIdIndexFromLosers < ActiveRecord::Migration
  def up
    remove_index :losers, name: 'index_losers_on_squad_id'
  end
  def down
    add_index :losers, :squad_id
  end
end
