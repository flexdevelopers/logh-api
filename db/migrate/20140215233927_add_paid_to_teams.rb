class AddPaidToTeams < ActiveRecord::Migration

  def up
    add_column :teams, :paid, :boolean, default: false
  end

  def down
    remove_column :teams, :paid
  end

end
