class ChangeTeamMessageFromStringToText < ActiveRecord::Migration
  def up
    change_column :teams, :message, :text
  end
  def down
    change_column :teams, :message, :string
  end
end
