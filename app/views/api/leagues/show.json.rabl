object @league
attributes :id, :name, :public, :season_id, :start_week_id, :max_teams_per_user, :message
node(:started) { |league| league.started? }
node(:closed) { |league| league.closed? }
node(:team_count) { |league| league.teams.active.count }
node(:start_week) { |league| league.start_week.display }
node(:commish_emails) { |league| league.commish_emails }