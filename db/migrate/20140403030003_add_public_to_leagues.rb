class AddPublicToLeagues < ActiveRecord::Migration
  def up
    add_column :leagues, :public, :boolean, default: true, null: false
  end
  def down
    remove_column :leagues, :public
  end
end
