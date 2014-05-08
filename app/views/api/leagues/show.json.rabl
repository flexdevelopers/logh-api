object @league
attributes :id, :name, :public, :season_id, :start_week_id, :max_teams_per_user
node(:team_count) { |league| league.teams.count }
node(:week_display) { |league| "Week #{league.start_week.number} (#{league.start_week.starts_at.strftime("%m/%d/%Y")})" }
