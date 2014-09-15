object @team
attributes :id, :name, :active, :alive
node(:last_pick_squad) do |team|
  if team.alive
    if team.current_pick
      {
          name: team.current_pick.squad.name,
          abbrev: team.current_pick.squad.name
      }
    else
      {
          name: "No Pick",
          abbrev: "No Pick"
      }
    end
  end
end
