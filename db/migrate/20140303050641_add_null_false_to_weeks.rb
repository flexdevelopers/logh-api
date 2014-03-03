class AddNullFalseToWeeks < ActiveRecord::Migration
  def up
    change_column :weeks, :number, :integer, null: false
    change_column :weeks, :season_id, :integer, null: false
  end
  def down
    change_column :weeks, :number, :integer, null: true
    change_column :weeks, :season_id, :integer, null: true
  end
end
