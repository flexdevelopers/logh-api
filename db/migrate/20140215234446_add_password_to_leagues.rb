class AddPasswordToLeagues < ActiveRecord::Migration

  def up
    add_column :leagues, :password, :string
  end

  def down
    remove_column :leagues, :password
  end

end
