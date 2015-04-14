class AddTbdToGames < ActiveRecord::Migration
  def up
    add_column :games, :tbd, :boolean, null: false, default: false
  end
  def down
    remove_column :games, :tbd
  end
end
