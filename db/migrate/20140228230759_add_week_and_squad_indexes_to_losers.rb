class AddWeekAndSquadIndexesToLosers < ActiveRecord::Migration
  def change
    add_index :losers, [:week_id, :squad_id], unique: true
  end
end
