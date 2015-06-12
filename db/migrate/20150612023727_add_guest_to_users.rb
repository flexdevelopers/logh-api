class AddGuestToUsers < ActiveRecord::Migration
  def up
    add_column :users, :guest, :boolean, default: false
  end
  def down
    remove_column :users, :guest
  end
end
