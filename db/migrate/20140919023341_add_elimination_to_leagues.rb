class AddEliminationToLeagues < ActiveRecord::Migration
  def up
    add_column :leagues, :elimination, :boolean, default: false
  end
  def down
    remove_column :leagues, :elimination
  end
end
