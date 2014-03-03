class AddNullFalseToPicks < ActiveRecord::Migration
  def up
    change_column :picks, :team_id, :integer, null: false
    change_column :picks, :week_id, :integer, null: false
    change_column :picks, :loser_id, :integer, null: false
  end
  def down
    change_column :picks, :team_id, :integer, null: true
    change_column :picks, :week_id, :integer, null: true
    change_column :picks, :loser_id, :integer, null: true
  end
end
