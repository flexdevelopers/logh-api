class AddRecordToSquads < ActiveRecord::Migration
  def up
    add_column :squads, :record, :string
  end
  def down
    remove_column :squads, :record
  end
end
