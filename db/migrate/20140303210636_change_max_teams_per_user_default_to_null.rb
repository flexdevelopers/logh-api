class ChangeMaxTeamsPerUserDefaultToNull < ActiveRecord::Migration
  def up
    change_column :leagues, :max_teams_per_user, :integer, default: nil
  end
  def down
    change_column :leagues, :max_teams_per_user, :integer, default: 0
  end
end
