class AddLoserSquadIdToGames < ActiveRecord::Migration
  def up
    add_column :games, :loser_squad_id, :integer
  end
  def down
    remove_column :games, :loser_squad_id
  end
end
