class CreateTeamCoaches < ActiveRecord::Migration
  def change
    create_table :team_coaches do |t|
      t.integer :user_id
      t.integer :team_id
      t.timestamps
    end
    add_index :team_coaches, :user_id
    add_index :team_coaches, :team_id
  end
end
