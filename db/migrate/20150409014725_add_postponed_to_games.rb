class AddPostponedToGames < ActiveRecord::Migration
  def up
    add_column :games, :postponed, :boolean, null: false, default: false
  end
  def down
    remove_column :games, :postponed
  end
end
