class AddSlugToWeeks < ActiveRecord::Migration
  def up
    add_column :weeks, :slug, :string
  end
  def down
    remove_column :weeks, :slug
  end
end
