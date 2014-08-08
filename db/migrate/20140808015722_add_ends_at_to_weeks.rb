class AddEndsAtToWeeks < ActiveRecord::Migration
  def up
    add_column :weeks, :ends_at, :datetime
  end
  def down
    remove_column :weeks, :ends_at
  end
end
