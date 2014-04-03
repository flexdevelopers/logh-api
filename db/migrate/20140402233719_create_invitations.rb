class CreateInvitations < ActiveRecord::Migration
  def up
    create_table :invitations do |t|
      t.integer :league_id
      t.string :email
      t.timestamps
    end
    add_index :invitations, :league_id
  end
  def down
    drop_table :invitations
  end
end
