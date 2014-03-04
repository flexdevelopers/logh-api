class AddNullFalseToAliveForTeams < ActiveRecord::Migration
  def change
    change_column :teams, :alive, :boolean, null: false
  end
end
