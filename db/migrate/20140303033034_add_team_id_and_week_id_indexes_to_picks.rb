class AddTeamIdAndWeekIdIndexesToPicks < ActiveRecord::Migration
  def change
    add_index :picks, :team_id
    add_index :picks, :week_id
  end
end
