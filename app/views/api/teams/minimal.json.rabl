object @team
attributes :id, :name, :active, :alive, :paid
node(:last_pick_squad) do |team|
  if team.alive
    if !team.current_pick
      { name: "No Pick", abbrev: "No Pick" }
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
