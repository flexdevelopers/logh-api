object @league
attributes :id, :name, :public, :season_id, :start_week_id, :max_teams_per_user

node(:foo) { |league| "#{league[:name]} foo"}