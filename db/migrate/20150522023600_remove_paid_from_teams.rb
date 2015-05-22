class RemovePaidFromTeams < ActiveRecord::Migration
  def up
    remove_column :teams, :paid
  end
  def down
    add_column :teams, :paid, :boolean, default: false
  end
end
