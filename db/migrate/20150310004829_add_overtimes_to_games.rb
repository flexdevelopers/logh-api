class AddOvertimesToGames < ActiveRecord::Migration
  def up
    add_column :games, :overtimes, :integer, null: false, default: 0
  end
  def down
    remove_column :games, :overtimes
  end
end
