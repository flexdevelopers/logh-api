class AddStartWeekToLeagues < ActiveRecord::Migration
  def up
    add_column :leagues, :start_week, :integer
  end
  def down
    remove_column :leagues, :start_week
  end
end
