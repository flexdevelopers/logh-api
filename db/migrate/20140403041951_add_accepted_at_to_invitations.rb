class AddAcceptedAtToInvitations < ActiveRecord::Migration
  def up
    add_column :invitations, :accepted_at, :datetime
  end
  def down
    remove_column :invitations, :accepted_at
  end
end
