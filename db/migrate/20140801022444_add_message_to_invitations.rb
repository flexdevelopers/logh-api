class AddMessageToInvitations < ActiveRecord::Migration
  def up
    add_column :invitations, :message, :string
  end
  def down
    remove_column :invitations, :message
  end
end
