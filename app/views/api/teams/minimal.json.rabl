object @team
attributes :id, :name, :alive
node(:last_pick_squad_name) do |team|
  if team.alive && !team.current_pick
    "No Pick"
  else
    ""
  end
end
