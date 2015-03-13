object @team
attributes :id, :name, :active, :paid
node(:alive) { |team| team.alive? }
node(:current_pick) do |team|
  current_picks = team.current_picks({})
  if team.alive?
    if team.league.max_picks_per_week == 1
      if current_picks.any?
        if current_picks[0].locked? || team.coach_ids.include?(@user.id)
          {
              name: current_picks[0].squad.name,
              abbrev: current_picks[0].squad.abbrev
          }
        else
          { name: "Hidden", abbrev: "Hidden" }
        end
      else
        {
            name: "No Pick | #{team.current_week.name}",
            abbrev: "No Pick | #{team.current_week.name}",
            warning: true
        }
      end
    else
      {
          name: "#{pluralize(current_picks.count, 'pick')} | #{team.current_week.name}",
          abbrev: "#{pluralize(current_picks.count, 'pick')} | #{team.current_week.name}",
          warning: (current_picks.count != team.league.max_picks_per_week && current_picks.count != team.current_week.games.count)
      }
    end
  end
end
