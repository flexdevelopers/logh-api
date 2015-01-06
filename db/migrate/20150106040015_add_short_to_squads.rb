class AddShortToSquads < ActiveRecord::Migration
  def up
    add_column :squads, :short, :string
  end
  def down
    remove_column :squads, :short
  end
end
