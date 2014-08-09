class AddCompleteToGames < ActiveRecord::Migration
  def up
    add_column :games, :complete, :boolean, default: false
  end
  def down
    remove_column :games, :complete
  end
end
