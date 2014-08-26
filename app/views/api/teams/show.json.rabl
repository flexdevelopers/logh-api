object @team
attributes :id, :name, :active, :alive, :message
node(:started) { |team| team.league.started? }
node(:start_week_display) { |team| team.league.start_week.display }
node(:commish_ids) { |team| team.commish_ids }
node(:coach_ids) { |team| team.coach_ids }
node(:pick_count) { |team| team.picks.count }
node(:last_pick_squad_name) do |team|
  if team.alive
    if !team.current_pick
      "No Pick"
    else
      if team.current_pick.locked? || team.coach_ids.include?(@user.id)
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