object @pick
attributes :id, :team_id, :week_type_id, :correct
node(:locked) { |pick| pick.locked? }
node(:week_name) { |pick| pick.week.name }
node(:week_type) { |pick| pick.week_type.description }
node(:game_start) do |pick|
  if pick.game && (pick.locked? || pick.coach_ids.include?(@user.id))
    pick.game.start_display_short
  else
    ""
  end
end
node(:game_display) do |pick|
  if pick.game && (pick.locked? || pick.coach_ids.include?(@user.id))
    if pick.locked? && pick.game.complete
      if pick.game.overtime
        "#{pick.game.squads[0][:name]} [ #{pick.game.visiting_squad_score} ] @ #{pick.game.squads[1][:name]} [ #{pick.game.home_squad_score} ] OT"
      else
        "#{pick.game.squads[0][:name]} [ #{pick.game.visiting_squad_score} ] @ #{pick.game.squads[1][:name]} [ #{pick.game.home_squad_score} ]"
      end
    else
      "#{pick.game.squads[0][:name]} [ #{pick.game.visiting_squad.record} ] @ #{pick.game.squads[1][:name]} [ #{pick.game.home_squad.record} ]"
    end
  else
    ""
  end
end
node(:squad) do |pick|
  if pick.locked? || pick.coach_ids.include?(@user.id)
    {
        id: pick.squad.id,
        name: pick.squad.name,
        abbrev: pick.squad.abbrev
    }
  else
    {
        id: 0,
        name: "Hidden",
        abbrev: "Hidden"
    }
  end
end