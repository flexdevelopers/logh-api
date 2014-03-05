class AddNullFalseToCompleteForWeeks < ActiveRecord::Migration
  def change
    change_column :weeks, :complete, :boolean, null: false
  end
end
