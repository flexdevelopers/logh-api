class AddActiveToSeasons < ActiveRecord::Migration
  def up
    add_column :seasons, :active, :boolean, default: false, null: false
  end
  def down
    remove_column :seasons, :active
  end
end
