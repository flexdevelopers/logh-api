class RenameTeamActiveColumn < ActiveRecord::Migration
  def up
    rename_column :teams, :active, :alive
  end
  def down
    rename_column :teams, :alive, :active
  end
end
