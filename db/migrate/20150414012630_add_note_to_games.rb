class AddNoteToGames < ActiveRecord::Migration
  def up
    add_column :games, :note, :string
  end
  def down
    remove_column :games, :note
  end
end
