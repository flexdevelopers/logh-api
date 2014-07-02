object @pick
attributes :id, :team_id, :correct
node(:started) { |pick| pick.started? }
node(:week_display) { |pick| pick.week_display }
node(:game_display) { |pick| pick.game_display }
node(:loser) do |pick|
  if pick.started?
    pick.squad.name
  else
    "Hidden"
  end
end
