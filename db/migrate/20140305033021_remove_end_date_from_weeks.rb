class RemoveEndDateFromWeeks < ActiveRecord::Migration
  def up
    remove_column :weeks, :end_date
  end
  def down
    add_column :weeks, :end_date, :datetime
  end
end
