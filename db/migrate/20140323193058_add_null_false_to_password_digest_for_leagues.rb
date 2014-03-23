class AddNullFalseToPasswordDigestForLeagues < ActiveRecord::Migration
  def up
    change_column :leagues, :password_digest, :string, null: false
  end
  def down
    change_column :leagues, :password_digest, :string, null: true
  end
end
