object @user
attributes :id, :email, :first_name, :last_name, :admin
node(:managed_league_count) { |user| user.managed_leagues.count }