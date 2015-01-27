class AddMaxPicksPerWeekToLeagues < ActiveRecord::Migration
  def up
    add_column :leagues, :max_picks_per_week, :integer, default: 0
  end
  def down
    remove_column :leagues, :max_picks_per_week
  end
end
