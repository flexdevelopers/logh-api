class AddSeasonTypeToSeasons < ActiveRecord::Migration
  def up
    add_column :seasons, :season_type, :string
  end
  def down
    remove_column :seasons, :season_type
  end
end
