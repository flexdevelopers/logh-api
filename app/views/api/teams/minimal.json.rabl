object @team
attributes :id, :name, :active, :alive, :paid
node(:last_pick) do |team|
  if team.alive
    if !team.current_pick
      if team.current_week
        {
            name: "No Pick | #{team.current_week.name}",
            abbrev: "No Pick | #{team.current_week.name}"
        }
      else
        { name: "No Pick", abbrev: "No Pick" }
      end
    else
      if team.current_pick.locked? || team.coach_ids.include?(@user.id)
        {
            name: team.current_pick.squad.name,
            abbrev: team.current_pick.squad.abbrev
        }
      else
        { name: "Hidden", abbrev: "Hidden" }
      end
    end
  end
end
