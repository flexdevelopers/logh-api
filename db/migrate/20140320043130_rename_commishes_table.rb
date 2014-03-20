class RenameCommishesTable < ActiveRecord::Migration
  def up
    rename_table :commishes, :league_commishes
  end
  def down
    rename_table :league_commishes, :commishes
  end
end
