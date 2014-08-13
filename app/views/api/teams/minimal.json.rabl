object @team
attributes :id, :name, :alive
node(:last_pick_squad_name) do |team|
  if team.alive
    if team.current_pick
      team.current_pick.squad.name
    else
      "No Pick"
    end
  end
end
