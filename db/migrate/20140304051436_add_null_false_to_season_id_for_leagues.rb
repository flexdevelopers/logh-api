class AddNullFalseToSeasonIdForLeagues < ActiveRecord::Migration
  def up
    League.all.each do |league|
      league.update_column(:season_id, 0)
    end
    change_column :leagues, :season_id, :integer, null: false
  end
  def down
    change_column :leagues, :season_id, :integer, null: true
  end
end
