class DropAPIKeys < ActiveRecord::Migration

  def up
    drop_table :api_keys
  end

  def down
    create_table :api_keys do |t|
      t.string :access_token
      t.timestamps
    end
  end

end
