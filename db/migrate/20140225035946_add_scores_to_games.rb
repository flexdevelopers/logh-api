class AddScoresToGames < ActiveRecord::Migration
  def change
    add_column :games, :home_squad_score, :integer
    add_column :games, :visiting_squad_score, :integer
  end
end
