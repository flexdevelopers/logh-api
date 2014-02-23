class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.datetime :start_datetime

      t.timestamps
    end
  end
end
