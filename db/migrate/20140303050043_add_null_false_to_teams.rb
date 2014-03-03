class AddNullFalseToTeams < ActiveRecord::Migration
  def up
    change_column :teams, :name, :string, null: false
    change_column :teams, :league_id, :integer, null: false
    change_column :teams, :user_id, :integer, null: false
  end
  def down
    change_column :teams, :name, :string, null: true
    change_column :teams, :league_id, :integer, null: true
    change_column :teams, :user_id, :integer, null: true
  end
end
