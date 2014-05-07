class AddNameAndSeasonUniqueIndexToLeagues < ActiveRecord::Migration
  def up
    add_index :leagues, [:name, :season_id], unique: true
  end
  def down
    remove_index :leagues, [:name, :season_id]
  end
end
