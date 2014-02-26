class AddLoserIdToPicks < ActiveRecord::Migration
  def change
    add_column :picks, :loser_id, :integer
  end
end
