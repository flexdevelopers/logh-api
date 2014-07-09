object @pick
attributes :id, :team_id, :squad_id, :week_type_id, :correct
node(:locked) { |pick| pick.locked? }
node(:week_display) { |pick| pick.week_display }
node(:game_display) do |pick|
  if pick.locked? || pick.coach_emails.include?(@user.email)
    pick.game_display
  else
    ""
  end
end
node(:squad_name) do |pick|
  if pick.locked? || pick.coach_emails.include?(@user.email)
    pick.squad.name
  else
    "Hidden"
  end
end
