class AddIndexForUserIdAndTeamIdToTeamCoaches < ActiveRecord::Migration
  def change
    add_index :team_coaches, [:user_id, :team_id], unique: true
  end
end
