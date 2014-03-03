class AddNullFalseToSquads < ActiveRecord::Migration
  def up
    change_column :squads, :name, :string, null: false
    change_column :squads, :abbrev, :string, null: false
  end
  def down
    change_column :squads, :name, :string, null: true
    change_column :squads, :abbrev, :string, null: true
  end
end
