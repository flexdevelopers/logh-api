object @team
attributes :id, :name, :paid, :alive
node(:coach_emails) { |team| team.coach_emails }
node(:coach_names) { |team| team.coach_names }
node(:last_pick_squad_name) do |team|
  if team.picks.length == 0
    return "None"
  end
  if team.picks.last.locked? || team.coach_emails.include?(@user.email)
    team.picks.last.squad.name
  else
    "Hidden"
  end
end
child :league do
  attributes :id, :name, :season_id, :started?
end