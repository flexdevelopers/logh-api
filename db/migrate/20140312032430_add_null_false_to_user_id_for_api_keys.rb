class AddNullFalseToUserIdForAPIKeys < ActiveRecord::Migration
  def up
    change_column :api_keys, :user_id, :string, null: false
  end
  def down
    change_column :api_keys, :user_id, :string, null: true
  end
end
