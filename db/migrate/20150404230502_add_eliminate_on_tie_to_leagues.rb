class AddEliminateOnTieToLeagues < ActiveRecord::Migration
  def up
    add_column :leagues, :eliminate_on_tie, :boolean, null: false, default: true
  end
  def down
    remove_column :leagues, :eliminate_on_tie
  end
end
