class AddMaxTeamsPerUserToLeagues < ActiveRecord::Migration

  def up
    add_column :leagues, :max_teams_per_user, :integer, default: 0
  end

  def down
    remove_column :leagues, :max_teams_per_user
  end

end
