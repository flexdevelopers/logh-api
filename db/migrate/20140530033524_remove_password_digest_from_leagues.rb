class RemovePasswordDigestFromLeagues < ActiveRecord::Migration
  def up
    remove_column :leagues, :password_digest
  end
  def down
    add_column :leagues, :password_digest, :string
  end
end
