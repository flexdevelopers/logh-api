class AddNullFalseToLeagueIdForInvitations < ActiveRecord::Migration
  def up
    change_column :invitations, :league_id, :integer, null: false
  end
  def down
    change_column :invitations, :league_id, :integer, null: true
  end
end
