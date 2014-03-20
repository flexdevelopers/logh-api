class RemoveUserFromLeagues < ActiveRecord::Migration
  def up
    remove_column :leagues, :user_id
  end
  def down
    add_column :leagues, :user_id, :integer, null: false
    add_index :leagues, :user_id
  end
end
