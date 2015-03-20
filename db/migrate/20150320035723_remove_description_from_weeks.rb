class RemoveDescriptionFromWeeks < ActiveRecord::Migration
  def up
    remove_column :weeks, :description
  end
  def down
    add_column :weeks, :description, :string
  end
end
