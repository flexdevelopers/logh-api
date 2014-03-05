class RenameStartDateForWeeks < ActiveRecord::Migration
  def up
    rename_column :weeks, :start_date, :starts_at
  end
  def down
    rename_column :weeks, :starts_at, :start_date
  end
end
