class AddNullFalseToEmailForInvitations < ActiveRecord::Migration
  def up
    change_column :invitations, :email, :string, null: false
  end
  def down
    change_column :invitations, :email, :string, null: true
  end
end
