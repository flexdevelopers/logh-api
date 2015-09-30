class AddArchiveToSeasons < ActiveRecord::Migration
  def up
    add_column :seasons, :archive, :boolean, default: false, null: false
  end
  def down
    remove_column :seasons, :archive
  end
end
