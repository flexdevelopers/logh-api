class AddNullFalseToEndsAtForSeasons < ActiveRecord::Migration
  def up
    change_column :seasons, :ends_at, :datetime, null: false
  end
  def down
    change_column :seasons, :ends_at, :datetime, null: true
  end
end
