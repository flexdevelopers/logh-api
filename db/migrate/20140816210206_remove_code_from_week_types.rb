class RemoveCodeFromWeekTypes < ActiveRecord::Migration
  def up
    remove_column :week_types, :code
  end
  def down
    add_column :week_types, :code, :string
  end
end
