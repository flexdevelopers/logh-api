class CreateCommishes < ActiveRecord::Migration
  def change
    create_table :commishes do |t|
      t.integer :user_id
      t.integer :league_id
      t.timestamps
    end
    add_index :commishes, :user_id
    add_index :commishes, :league_id
  end
end
