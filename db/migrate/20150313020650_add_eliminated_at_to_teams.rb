class AddEliminatedAtToTeams < ActiveRecord::Migration
  def up
    add_column :teams, :eliminated_at, :datetime
  end
  def down
    remove_column :teams, :eliminated_at
  end
end
