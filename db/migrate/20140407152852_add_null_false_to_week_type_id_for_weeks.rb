class AddNullFalseToWeekTypeIdForWeeks < ActiveRecord::Migration
  def up
    change_column :weeks, :week_type_id, :integer, null: false
  end
  def down
    change_column :weeks, :week_type_id, :integer, null: true
  end
end
