class AddOvertimeToGames < ActiveRecord::Migration
  def up
    add_column :games, :overtime, :boolean, default: false
  end
  def down
    remove_column :games, :overtime
  end
end
