class AddWeekTypeToWeeks < ActiveRecord::Migration
  def up
    add_column :weeks, :week_type_id, :integer
  end
  def down
    remove_column :weeks, :week_type_id
  end
end
