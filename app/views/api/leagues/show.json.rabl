object @league
attributes :id, :name, :public, :elimination, :open, :season_id, :start_week_id, :max_teams_per_user, :message
node(:started) { |league| league.started? }
node(:team_count) { |league| league.teams.active.count }
node(:alive_team_count) { |league| league.teams.active.alive.count }
node(:start_week_display) { |league| league.start_week.display }
node(:start_week_complete) { |league| league.start_week.complete }
node(:commish_ids) { |league| league.commish_ids }
