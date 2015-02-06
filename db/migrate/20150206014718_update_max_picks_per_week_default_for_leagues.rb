class UpdateMaxPicksPerWeekDefaultForLeagues < ActiveRecord::Migration
  def up
    change_column :leagues, :max_picks_per_week, :integer, default: 1
  end
  def down
    change_column :leagues, :max_picks_per_week, :integer, default: 0
  end
end
