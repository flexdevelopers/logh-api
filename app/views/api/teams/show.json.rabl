object @team
attributes :id, :name, :active, :alive, :message
node(:started) { |team| team.league.started? }
node(:start_week_display) { |team| team.league.start_week.display }
node(:commish_ids) { |team| team.commish_ids }
node(:coach_ids) { |team| team.coach_ids }
node(:coach_names) { |team| team.coach_names }
node(:pick_count) { |team| team.picks.correct.count }
node(:last_pick_squad) do |team|
  if team.alive
    if !team.current_pick
      { name: "No Pick", abbrev: "No Pick", locked: false }
    else
      if team.current_pick.locked? || team.coach_ids.include?(@user.id)
        {
            name: "#{team.current_pick.squad.name} | Week #{team.current_pick.week.number}",
            abbrev: "#{team.current_pick.squad.abbrev} | Week #{team.current_pick.week.number}",
            locked: team.current_pick.locked?
        }
      else
        {
            name: "Hidden | Week #{team.current_pick.week.number}",
            abbrev: "Hidden | Week #{team.current_pick.week.number}",
            locked: team.current_pick.locked?
        }
      end
    end
  else
    incorrect_pick = team.picks.where(correct: false)[0]
    {
        name: "#{incorrect_pick.squad.name} | Week #{incorrect_pick.week.number}",
        abbrev: "#{incorrect_pick.squad.abbrev} | Week #{incorrect_pick.week.number}",
        locked: true
    }
  end
end
child :league do
  attributes :id, :name, :season_id
end