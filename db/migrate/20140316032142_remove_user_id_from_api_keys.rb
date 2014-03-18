class RemoveUserIdFromAPIKeys < ActiveRecord::Migration
  def up
    remove_column :api_keys, :user_id
  end
  def down
    add_column :api_keys, :user_id, :string, null: false
  end
end
