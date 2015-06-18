object @league
attributes :id, :name, :public, :elimination, :eliminate_on_tie, :season_id, :start_week_id, :max_teams_per_user, :max_picks_per_week, :message
node(:started) { |league| league.started? }
node(:closed) { |league| league.closed? }
node(:format) { |league| league.format }
node(:team_count) { |league| league.teams.active.count }
node(:start_week_display) { |league| league.start_week.display }
node(:season_name) { |league| league.season.name }
node(:commish_names) { |league| league.commish_names }
node(:commish_ids) { |league| league.commish_ids }
