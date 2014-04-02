class AddNullFalseToStartWeekForLeagues < ActiveRecord::Migration
  def up
    change_column :leagues, :start_week, :integer, null: false
  end
  def down
    change_column :leagues, :start_week, :integer, null: true
  end
end
