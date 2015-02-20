object @week
attributes :id, :week_type_id, :name, :description, :slug, :season_id, :starts_at, :ends_at, :reminder_sent_at, :complete
node(:display) { |week| week.display }

