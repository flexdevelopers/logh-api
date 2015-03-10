class AddInningsToGames < ActiveRecord::Migration
  def up
    add_column :games, :innings, :integer, null: false, default: 9
  end
  def down
    remove_column :games, :innings
  end
end
