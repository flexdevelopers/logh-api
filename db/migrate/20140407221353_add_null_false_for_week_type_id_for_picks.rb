class AddNullFalseForWeekTypeIdForPicks < ActiveRecord::Migration
  def up
    change_column :picks, :week_type_id, :integer, null: false
  end
  def down
    change_column :picks, :week_type_id, :integer, null: true
  end
end
