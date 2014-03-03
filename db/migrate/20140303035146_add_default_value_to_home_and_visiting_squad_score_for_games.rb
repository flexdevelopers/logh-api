class AddDefaultValueToHomeAndVisitingSquadScoreForGames < ActiveRecord::Migration
  def up
    change_column :games, :home_squad_score, :integer, null: false, default: 0
    change_column :games, :visiting_squad_score, :integer, null: false, default: 0
  end
  def down
    change_column :games, :home_squad_score, :integer, null: true, default: nil
    change_column :games, :visiting_squad_score, :integer, null: true, default: nil
  end
end
