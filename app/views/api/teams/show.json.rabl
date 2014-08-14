object @team
attributes :id, :name, :active, :alive, :message
node(:commish_emails) { |team| team.commish_emails }
node(:coach_emails) { |team| team.coach_emails }
node(:last_pick_squad_name) do |team|
  if team.alive
    if !team.current_pick
      "No Pick"
    else
      if team.current_pick.locked? || team.coach_emails.include?(@user.email)
        team.current_pick.squad.name
      else
        "Hidden"
      end
    end
  else
    incorrect_pick = team.picks.where(correct: false)[0]
    if incorrect_pick
      "#{incorrect_pick.squad.name} (Week #{incorrect_pick.week.number})"
    else
      "No Pick"
    end
  end
end
child :league do
  attributes :id, :name, :season_id
end