object @pick
attributes :id, :team_id, :week_type_id, :correct
node(:squad_id) do |pick|
  if pick.locked? || pick.coach_ids.include?(@user.id)
    pick.squad_id
  else
    0
  end
end
node(:locked) { |pick| pick.locked? }
node(:week_type) { |pick| pick.week_type.description }
node(:week_number) { |pick| pick.week.number }
node(:game_display) do |pick|
  if pick.game && (pick.locked? || pick.coach_ids.include?(@user.id))
    "#{pick.game.squads[0][:name]} [ #{pick.game.visiting_squad_score} ] @ #{pick.game.squads[1][:name]} [ #{pick.game.home_squad_score} ]"
  else
    ""
  end
end
node(:squad_name) do |pick|
  if pick.locked? || pick.coach_ids.include?(@user.id)
    pick.squad.name
  else
    "Hidden"
  end
end
