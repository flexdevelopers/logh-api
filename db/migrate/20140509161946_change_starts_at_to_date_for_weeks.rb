class ChangeStartsAtToDateForWeeks < ActiveRecord::Migration
  def up
    change_column :weeks, :starts_at, :date, null: false
  end
  def down
    change_column :weeks, :starts_at, :datetime, null: false
  end
end
