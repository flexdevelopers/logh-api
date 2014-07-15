class ChangeTeamActiveDefaultToTrue < ActiveRecord::Migration
  def up
    change_column :teams, :active, :boolean, null: false, default: true
  end
  def down
    change_column :teams, :active, :boolean, null: true, default: false
  end
end
