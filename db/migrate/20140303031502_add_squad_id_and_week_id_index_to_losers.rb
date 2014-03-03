class AddSquadIdAndWeekIdIndexToLosers < ActiveRecord::Migration
  def change
    add_index :losers, :week_id
    add_index :losers, :squad_id
  end
end
