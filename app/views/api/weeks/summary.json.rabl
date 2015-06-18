object @week
attributes :id, :week_type_id, :name, :slug, :season_id, :starts_at, :ends_at, :reminder_sent_at, :complete
node(:display) { |week| week.display }
node(:type) { |week| week.week_type.description }


