class ChangePasswordToPasswordDigestForLeagues < ActiveRecord::Migration
  def up
    rename_column :leagues, :password, :password_digest
  end
  def down
    rename_column :leagues, :password_digest, :password
  end
end
