class AddNoneToSquads < ActiveRecord::Migration
  def up
    add_column :squads, :none, :boolean, default: false
  end
  def down
    remove_column :squads, :none
  end
end
