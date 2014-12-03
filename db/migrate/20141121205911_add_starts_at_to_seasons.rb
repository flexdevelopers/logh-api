class AddStartsAtToSeasons < ActiveRecord::Migration
  def up
    add_column :seasons, :starts_at, :datetime
  end
  def down
    remove_column :seasons, :starts_at
  end
end
