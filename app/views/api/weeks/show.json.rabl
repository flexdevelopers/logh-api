object @week
attributes :id, :week_type_id, :name, :description, :slug, :season_id, :starts_at, :ends_at, :reminder_sent_at, :complete
node(:display) { |week| week.display }
node(:date_range) { |week| week.date_range }
node(:type) { |week| week.week_type.description }
node(:game_count) { |week| week.games.count }
node(:season_type) { |week| week.season.season_type }

