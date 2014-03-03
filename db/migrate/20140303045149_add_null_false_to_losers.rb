class AddNullFalseToLosers < ActiveRecord::Migration
  def up
    change_column :losers, :week_id, :integer, null: false
    change_column :losers, :squad_id, :integer, null: false
  end
  def down
    change_column :losers, :week_id, :integer, null: true
    change_column :losers, :squad_id, :integer, null: true
  end
end
