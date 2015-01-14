object @team
attributes :id, :name, :active, :alive, :paid
node(:last_pick) do |team|
  current_pick = team.current_pick({})
  if team.alive
    if !current_pick
      {
          name: "No Pick | #{team.current_week.name}",
          abbrev: "No Pick | #{team.current_week.name}"
      }
    else
      if current_pick.locked? || team.coach_ids.include?(@user.id)
        {
            name: current_pick.squad.name,
            abbrev: current_pick.squad.abbrev
        }
      else
        { name: "Hidden", abbrev: "Hidden" }
      end
    end
  end
end
