class AddNumberAndSeasonIndexToWeeks < ActiveRecord::Migration
  def change
    add_index :weeks, [:number, :season_id], unique: true
  end
end
