class RenameTeamPaidColumn < ActiveRecord::Migration
  def up
    rename_column :teams, :paid, :active
  end
  def down
    rename_column :teams, :active, :paid
  end
end
