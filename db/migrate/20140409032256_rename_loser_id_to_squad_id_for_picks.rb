class RenameLoserIdToSquadIdForPicks < ActiveRecord::Migration
  def up
    rename_column :picks, :loser_id, :squad_id
  end
  def down
    rename_column :picks, :squad_id, :loser_id
  end
end
