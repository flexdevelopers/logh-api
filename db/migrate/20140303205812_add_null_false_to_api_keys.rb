class AddNullFalseToAPIKeys < ActiveRecord::Migration
  def up
    change_column :api_keys, :access_token, :string, null: false
  end
  def down
    change_column :api_keys, :access_token, :string, null: true
  end
end
