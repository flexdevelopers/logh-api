class AddNullTrueToGameForPicks < ActiveRecord::Migration
  def up
    change_column :picks, :game_id, :integer, null: true
  end
  def down
    change_column :picks, :game_id, :integer, null: false
  end
end
