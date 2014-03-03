class AddNullFalseToSeasons < ActiveRecord::Migration
  def up
    change_column :seasons, :name, :string, null: false
  end
  def down
    change_column :seasons, :name, :string, null: true
  end
end
