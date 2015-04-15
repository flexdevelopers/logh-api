class AddPlayoffToGames < ActiveRecord::Migration
  def up
    add_column :games, :playoff, :boolean, null: false, default: false
  end
  def down
    remove_column :games, :playoff
  end
end
