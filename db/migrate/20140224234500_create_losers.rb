class CreateLosers < ActiveRecord::Migration
  def change
    create_table :losers do |t|
      t.integer :week_id
      t.integer :squad_id

      t.timestamps
    end
  end
end
