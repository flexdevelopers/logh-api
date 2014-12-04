class RemoveRecordFromSquads < ActiveRecord::Migration
  def up
    remove_column :squads, :record
  end
  def down
    add_column :squads, :record, :string
  end
end
