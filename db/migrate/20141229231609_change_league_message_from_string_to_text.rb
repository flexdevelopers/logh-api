class ChangeLeagueMessageFromStringToText < ActiveRecord::Migration
  def up
    change_column :leagues, :message, :text
  end
  def down
    change_column :leagues, :message, :string
  end
end
