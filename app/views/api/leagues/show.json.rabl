object @league
attributes :id, :name, :public, :season_id, :start_week_id, :max_teams_per_user
node(:started) { |league| league.started? }
node(:team_count) { |league| league.teams.count }
node(:week_display) { |league| league.week_display }
node(:commish_emails) { |league| league.commish_emails }