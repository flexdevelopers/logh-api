class AddWeekAndTeamIndexToPicks < ActiveRecord::Migration
  def change
    add_index :picks, [:week_id, :team_id], unique: true
  end
end
