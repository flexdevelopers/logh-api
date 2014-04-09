class AddIndexForLeagueIdAndEmailToInvitations < ActiveRecord::Migration
  def change
    add_index :invitations, [:league_id, :email], unique: true
  end
end
