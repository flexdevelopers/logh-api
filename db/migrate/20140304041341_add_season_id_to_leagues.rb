class AddSeasonIdToLeagues < ActiveRecord::Migration
  def change
    add_column :leagues, :season_id, :integer
  end
end
