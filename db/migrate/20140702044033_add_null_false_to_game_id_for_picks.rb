class AddNullFalseToGameIdForPicks < ActiveRecord::Migration
  def up
    change_column :picks, :game_id, :integer, null: false
  end
  def down
    change_column :picks, :game_id, :integer, null: true
  end
end
