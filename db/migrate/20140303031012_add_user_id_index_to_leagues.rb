class AddUserIdIndexToLeagues < ActiveRecord::Migration
  def change
    add_index :leagues, :user_id
  end
end
