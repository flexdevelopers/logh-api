class RemoveAliveFromTeams < ActiveRecord::Migration
  def up
    remove_column :teams, :alive
  end
  def down
    add_column :teams, :alive, :boolean, default: true, null: false
  end
end
