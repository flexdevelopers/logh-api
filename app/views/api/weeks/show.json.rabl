object @week
attributes :id, :week_type_id, :name, :description, :season_id, :starts_at, :ends_at, :reminder_sent_at, :complete
node(:display) { |week| week.display }
node(:type) { |week| week.week_type.description }
node(:game_count) { |week| week.games.count }

