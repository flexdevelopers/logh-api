class AddSeasonIdIndexToWeeks < ActiveRecord::Migration
  def change
    add_index :weeks, :season_id
  end
end
