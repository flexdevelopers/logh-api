class AddSeasonIdToWeeks < ActiveRecord::Migration
  def change
    add_column :weeks, :season_id, :integer
  end
end
