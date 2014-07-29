class AddGameToLosers < ActiveRecord::Migration
  def up
    add_column :losers, :game_id, :integer
  end
  def down
    remove_column :losers, :game_id
  end
end
