class AddEndsAtToSeasons < ActiveRecord::Migration
  def up
    add_column :seasons, :ends_at, :datetime
  end
  def down
    remove_column :seasons, :ends_at
  end
end
