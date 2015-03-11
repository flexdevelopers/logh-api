class AddSeedToSquads < ActiveRecord::Migration
  def up
    add_column :squads, :seed, :integer, null: false, default: 0
  end
  def down
    remove_column :squads, :seed
  end
end
