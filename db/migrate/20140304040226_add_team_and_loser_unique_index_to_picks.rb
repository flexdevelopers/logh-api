class AddTeamAndLoserUniqueIndexToPicks < ActiveRecord::Migration
  def change
    add_index :picks, [:team_id, :loser_id], unique: true
  end
end
