class AddIfNecessaryToGames < ActiveRecord::Migration
  def up
    add_column :games, :if_necessary, :boolean, null: false, default: false
  end
  def down
    remove_column :games, :if_necessary
  end
end
