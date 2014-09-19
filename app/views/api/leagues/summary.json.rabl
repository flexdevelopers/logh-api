object @league
attributes :id, :name, :public, :elimination, :open, :season_id, :start_week_id, :max_teams_per_user, :message
node(:started) { |league| league.started? }
node(:team_count) { |league| league.teams.active.count }
node(:start_week) { |league| league.start_week.display }
node(:commish_names) { |league| league.commish_names }
node(:commish_ids) { |league| league.commish_ids }
