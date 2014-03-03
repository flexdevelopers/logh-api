class AddNullFalseToNameAndUserIdForLeagues < ActiveRecord::Migration
  def up
    change_column :leagues, :name, :string, null: false
    change_column :leagues, :user_id, :integer, null: false
  end
  def down
    change_column :leagues, :name, :string, null: true
    change_column :leagues, :user_id, :integer, null: true
  end
end
