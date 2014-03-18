class AddUserIdToAPIKeys < ActiveRecord::Migration
  def up
    add_column :api_keys, :user_id, :string
    add_index :api_keys, :user_id, unique: true
  end
  def down
    remove_column :api_keys, :user_id
    remove_index :api_keys, :user_id
  end
end
