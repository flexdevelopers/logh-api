class AddIndexForTeamIdAndLoserIdAndWeekTypeToPicks < ActiveRecord::Migration
  def change
    add_index :picks, [:team_id, :loser_id, :week_type_id], unique: true
  end
end
