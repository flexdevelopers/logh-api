class AddNullFalseToStartsAtForWeeks < ActiveRecord::Migration
  def change
    change_column :weeks, :starts_at, :datetime, null: false
  end
end
