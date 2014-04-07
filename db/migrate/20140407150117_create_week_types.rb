class CreateWeekTypes < ActiveRecord::Migration
  def up
    create_table :week_types do |t|
      t.string  :code
      t.string  :description
      t.timestamps
    end
  end
  def down
    drop_table :week_types
  end
end
