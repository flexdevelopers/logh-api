class AddActiveToTeams < ActiveRecord::Migration

  def up
    add_column :teams, :active, :boolean, default: true
  end

  def down
    remove_column :teams, :active
  end

end
