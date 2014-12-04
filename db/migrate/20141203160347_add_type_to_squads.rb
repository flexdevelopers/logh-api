class AddTypeToSquads < ActiveRecord::Migration
  def up
    add_column :squads, :squad_type, :string
  end
  def down
    remove_column :squads, :squad_type
  end
end
