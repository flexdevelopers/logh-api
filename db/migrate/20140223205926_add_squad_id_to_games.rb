class AddSquadIdToGames < ActiveRecord::Migration
  def change
    add_column :games, :home_squad_id, :integer
    add_column :games, :visiting_squad_id, :integer
  end
end
