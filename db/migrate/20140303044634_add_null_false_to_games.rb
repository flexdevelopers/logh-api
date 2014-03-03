class AddNullFalseToGames < ActiveRecord::Migration
  def up
    change_column :games, :week_id, :integer, null: false
    change_column :games, :start_datetime, :datetime, null: false
    change_column :games, :home_squad_id, :integer, null: false
    change_column :games, :visiting_squad_id, :integer, null: false
  end
  def down
    change_column :games, :week_id, :integer, null: true
    change_column :games, :start_datetime, :datetime, null: true
    change_column :games, :home_squad_id, :integer, null: true
    change_column :games, :visiting_squad_id, :integer, null: true
  end
end
