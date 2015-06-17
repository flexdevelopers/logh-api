object @week
cache @week
attributes :id, :week_type_id, :name, :slug, :season_id, :starts_at, :ends_at, :reminder_sent_at, :complete
node(:display) { |week| week.display }
node(:date_range) { |week| week.date_range }
node(:type) { |week| week.week_type.description }
node(:game_count) { |week| week.games.count }
node(:game_complete_count) { |week| week.games.complete.count }
node(:game_tbd_count) { |week| week.games.tbd.count }
node(:season_type) { |week| week.season.season_type }

