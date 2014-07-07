object @pick
attributes :id, :team_id, :squad_id, :week_type_id, :correct
node(:locked) { |pick| pick.locked? }
node(:week_display) { |pick| pick.week_display }
node(:game_display) { |pick| pick.game_display }
node(:loser) do |pick|
  if pick.locked? || pick.coach_emails.include?(@user.email)
    pick.squad.name
  else
    "Hidden"
  end
end
