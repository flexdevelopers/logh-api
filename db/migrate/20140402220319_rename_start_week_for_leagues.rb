class RenameStartWeekForLeagues < ActiveRecord::Migration
  def up
    rename_column :leagues, :start_week, :start_week_id
  end
  def down
    rename_column :leagues, :start_week_id, :start_week
  end
end
