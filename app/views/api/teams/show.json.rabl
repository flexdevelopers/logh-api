object @team
attributes :id, :name, :active, :alive, :message
node(:commish_emails) { |team| team.commish_emails }
node(:coach_emails) { |team| team.coach_emails }
node(:coach_names) { |team| team.coach_names }
node(:last_pick_squad_name) do |team|
  if !team.current_pick
    "None"
  else
    if team.current_pick.locked? || team.coach_emails.include?(@user.email)
      team.current_pick.squad.name
    else
      "Hidden"
    end
  end
end
child :league do
  attributes :id, :name, :season_id, :started?
end