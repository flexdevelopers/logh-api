class AddTiesToSquad < ActiveRecord::Migration
  def up
    add_column :squads, :ties, :integer, null: false, default: 0
  end
  def down
    remove_column :squads, :ties
  end
end
