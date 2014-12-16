object @team
attributes :id, :name, :active, :alive, :paid, :message
node(:started) { |team| team.league.started? }
node(:start_week_display) { |team| team.league.start_week.display }
node(:commish_ids) { |team| team.commish_ids }
node(:coach_ids) { |team| team.coach_ids }
node(:coach_names) { |team| team.coach_names }
node(:pick_count) { |team| team.picks.correct.count }
node(:last_pick_squad) do |team|
  if team.alive
    if !team.current_pick
      if team.current_week
        {
            name: "No Pick | #{team.current_week.name}",
            abbrev: "No Pick | #{team.current_week.name}",
            locked: false
        }
      else
        { name: "No Pick", abbrev: "No Pick", locked: false }
      end
    else
      if team.current_pick.locked? || team.coach_ids.include?(@user.id)
        {
            name: "#{team.current_pick.squad.name} | #{team.current_pick.week.name}",
            abbrev: "#{team.current_pick.squad.abbrev} | #{team.current_pick.week.name}",
            locked: team.current_pick.locked?,
            week: team.current_pick.week.display
        }
      else
        {
            name: "Hidden | #{team.current_pick.week.name}",
            abbrev: "Hidden | #{team.current_pick.week.name}",
            locked: team.current_pick.locked?,
            week: team.current_pick.week.display
        }
      end
    end
  else
    incorrect_pick = team.picks.where(correct: false)[0]
    {
        name: "#{incorrect_pick.squad.name} | #{incorrect_pick.week.name}",
        abbrev: "#{incorrect_pick.squad.abbrev} | #{incorrect_pick.week.name}",
        locked: true
    }
  end
end
child :league do
  attributes :id, :name, :season_id
end