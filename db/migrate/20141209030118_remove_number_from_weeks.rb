class RemoveNumberFromWeeks < ActiveRecord::Migration
  def up
    remove_column :weeks, :number
  end
  def down
    add_column :weeks, :number, :integer, null: false
  end
end
