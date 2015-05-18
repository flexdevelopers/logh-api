object @pick
attributes :id, :team_id, :week_id, :week_type_id, :correct
node(:locked) { |pick| pick.locked? }
node(:game_id) do |pick|
  game = pick.game
  if game && (pick.locked? || pick.coach_ids.include?(@user.id))
    game.id
  else
    0
  end
end
node(:squad_id) do |pick|
  if pick.locked? || pick.coach_ids.include?(@user.id)
    pick.squad.id
  else
    0
  end
end
node(:week) do |pick|
  week = pick.week
  week_type = pick.week_type
  {
      name: week.name,
      slug: week.slug,
      date: week.starts_at,
      type: week_type.description
  }
end
node(:game) do |pick|
  game = pick.game
  if game && (pick.locked? || pick.coach_ids.include?(@user.id))
    squads = game.squads
    if game.complete
      display = "#{squads[0][:short]} [ #{game.visiting_squad_score} ] @ #{squads[1][:short]} [ #{game.home_squad_score} ] #{game.ot_display}"
    elsif game.incomplete?
      display = "[ Incomplete ]" # this is an incomplete game. this happens to ppd games that never get resolved.
    else
      display = "#{squads[0][:short]} [ #{game.visiting_squad.record} ] @ #{squads[1][:short]} [ #{game.home_squad.record} ]"
    end
    {
        id: game.id,
        display: display,
        start: game.starts_at,
        tbd: game.tbd,
        postponed: game.postponed,
        if_necessary: game.if_necessary,
        tie: game.tie?,
        incomplete: game.incomplete?,
        note: game.note
    }
  end
end
node(:squad) do |pick|
  squad = pick.squad
  if pick.locked? || pick.coach_ids.include?(@user.id)
    {
        id: squad.id,
        name: squad.name,
        abbrev: squad.abbrev,
        short: squad.short
    }
  else
    {
        id: 0,
        name: "Hidden",
        abbrev: "Hidden",
        short: "Hidden"
    }
  end
end