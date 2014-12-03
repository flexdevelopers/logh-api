class RemoveActiveFromSeasons < ActiveRecord::Migration
  def up
    remove_column :seasons, :active
  end
  def down
    add_column :seasons, :active, :boolean, default: false, null: false
  end
end
