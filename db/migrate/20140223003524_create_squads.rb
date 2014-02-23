class CreateSquads < ActiveRecord::Migration
  def change
    create_table :squads do |t|
      t.string :name
      t.string :abbrev

      t.timestamps
    end
  end
end
