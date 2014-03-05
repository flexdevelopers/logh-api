class ChangeStartDatetimeToStartsAtForGames < ActiveRecord::Migration
  def up
    rename_column :games, :start_datetime, :starts_at
  end
  def down
    rename_column :games, :starts_at, :start_datetime
  end
end
