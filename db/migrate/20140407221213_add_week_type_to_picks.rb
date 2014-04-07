class AddWeekTypeToPicks < ActiveRecord::Migration
  def up
    add_column :picks, :week_type_id, :integer
  end
  def down
    remove_column :picks, :week_type_id
  end
end
