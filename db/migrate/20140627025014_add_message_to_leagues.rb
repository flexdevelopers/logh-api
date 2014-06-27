class AddMessageToLeagues < ActiveRecord::Migration
  def up
    add_column :leagues, :message, :string
  end
  def down
    remove_column :leagues, :message
  end
end
