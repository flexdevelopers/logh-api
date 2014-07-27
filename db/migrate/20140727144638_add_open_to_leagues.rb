class AddOpenToLeagues < ActiveRecord::Migration
  def up
    add_column :leagues, :open, :boolean, default: true, null: false
  end
  def down
    remove_column :leagues, :open
  end
end
