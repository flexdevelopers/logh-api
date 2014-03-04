class AddSeasonIdIndexToLeagues < ActiveRecord::Migration
  def change
    add_index :leagues, :season_id
  end
end
