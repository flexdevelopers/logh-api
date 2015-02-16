object @pick
attributes :id, :team_id, :week_id, :game_id, :squad_id, :week_type_id, :correct
node(:locked) { |pick| pick.locked? }
node(:week_name) { |pick| pick.week.name }
node(:week_slug) { |pick| pick.week.slug }
node(:week_type) { |pick| pick.week_type.description }
node(:game) do |pick|
  if pick.game && (pick.locked? || pick.coach_ids.include?(@user.id))
    if pick.locked? && pick.game.complete
      ot = pick.game.overtime ? 'OT' : ''
      display = "#{pick.game.squads[0][:short]} [ #{pick.game.visiting_squad_score} ] @ #{pick.game.squads[1][:short]} [ #{pick.game.home_squad_score} ] #{ot}"
    else
      display = "#{pick.game.squads[0][:short]} [ #{pick.game.visiting_squad.record} ] @ #{pick.game.squads[1][:short]} [ #{pick.game.home_squad.record} ]"
    end
    {
        id: pick.game.id,
        display: display,
        start: pick.game.start_display_short
    }
  else
    {
        id: 0,
        display: "",
        start: ""
    }
  end
end
node(:squad) do |pick|
  if pick.locked? || pick.coach_ids.include?(@user.id)
    {
        id: pick.squad.id,
        name: pick.squad.name,
        abbrev: pick.squad.abbrev,
        short: pick.squad.short
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