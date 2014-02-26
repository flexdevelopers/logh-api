class AddCompleteToWeeks < ActiveRecord::Migration
  def change
    add_column :weeks, :complete, :boolean, default: false
  end
end
