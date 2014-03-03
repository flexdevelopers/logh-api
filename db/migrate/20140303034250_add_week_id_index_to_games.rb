class AddWeekIdIndexToGames < ActiveRecord::Migration
  def change
    add_index :games, :week_id
  end
end
