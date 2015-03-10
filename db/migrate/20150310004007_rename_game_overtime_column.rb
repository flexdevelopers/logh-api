class RenameGameOvertimeColumn < ActiveRecord::Migration
  def up
    rename_column :games, :overtime, :shootout
  end
  def down
    rename_column :games, :shootout, :overtime
  end
end
