class AddReminderSentAtToWeeks < ActiveRecord::Migration
  def up
    add_column :weeks, :reminder_sent_at, :datetime
  end
  def down
    remove_column :weeks, :reminder_sent_at
  end
end
