class AddTeamIdToPick < ActiveRecord::Migration

  def up
    add_column :picks, :team_id, :integer
  end

  def down
    remove_column :picks, :team_id
  end

end
