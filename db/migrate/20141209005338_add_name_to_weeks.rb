class AddNameToWeeks < ActiveRecord::Migration
  def up
    add_column :weeks, :name, :string
    add_column :weeks, :description, :string
  end
  def down
    remove_column :weeks, :name
    remove_column :weeks, :description
  end
end
