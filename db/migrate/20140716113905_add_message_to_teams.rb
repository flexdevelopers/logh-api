class AddMessageToTeams < ActiveRecord::Migration
  def up
    add_column :teams, :message, :string
  end
  def down
    remove_column :teams, :message
  end
end
