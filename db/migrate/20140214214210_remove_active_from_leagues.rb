class RemoveActiveFromLeagues < ActiveRecord::Migration

  def up
    remove_column :leagues, :active
  end

  def down
    add_column :leagues, :active, :boolean, default: true
  end

end
