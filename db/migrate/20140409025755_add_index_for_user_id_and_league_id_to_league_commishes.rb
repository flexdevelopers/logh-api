class AddIndexForUserIdAndLeagueIdToLeagueCommishes < ActiveRecord::Migration
  def change
    add_index :league_commishes, [:user_id, :league_id], unique: true
  end
end
