class RemoveAllowDupsFromLeagues < ActiveRecord::Migration
  def up
    remove_column :leagues, :allow_dups
  end
  def down
    add_column :leagues, :allow_dups, :boolean, default: false, null: false
  end
end
