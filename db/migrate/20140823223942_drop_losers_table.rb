class DropLosersTable < ActiveRecord::Migration
  def change
    drop_table :losers
  end
end
