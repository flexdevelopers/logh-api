class AddWinsToSquad < ActiveRecord::Migration
  def up
    add_column :squads, :wins, :integer, null: false, default: 0
  end
  def down
    remove_column :squads, :wins
  end
end
