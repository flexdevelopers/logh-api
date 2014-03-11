class AddNullFalseToPasswordDigestForUsers < ActiveRecord::Migration
  def up
    change_column :users, :password_digest, :string, null: false
  end
  def down
    change_column :users, :password_digest, :string, null: true
  end
end
