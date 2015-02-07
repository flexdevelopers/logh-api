class RemoveOpenFromLeagues < ActiveRecord::Migration
  def up
    remove_column :leagues, :open
  end
  def down
    add_column :leagues, :open, :boolean, default: true, null: false
  end
end
