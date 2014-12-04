class AddLossesToSquad < ActiveRecord::Migration
  def up
    add_column :squads, :losses, :integer, null: false, default: 0
  end
  def down
    remove_column :squads, :losses
  end
end
