class RemoveUserFromTeams < ActiveRecord::Migration
  def up
    remove_column :teams, :user_id
  end
  def down
    add_column :teams, :user_id, :integer, null: false
  end
end
