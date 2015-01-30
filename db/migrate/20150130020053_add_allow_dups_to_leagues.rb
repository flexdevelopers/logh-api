class AddAllowDupsToLeagues < ActiveRecord::Migration
  def up
    add_column :leagues, :allow_dups, :boolean, default: false, null: false
  end
  def down
    remove_column :leagues, :allow_dups
  end
end
