object @team
attributes :id, :name, :active, :alive, :paid, :message
node(:started) { |team| team.league.started? }
node(:start_week_display) { |team| team.league.start_week.display }
node(:commish_ids) { |team| team.commish_ids }
node(:coach_ids) { |team| team.coach_ids }
node(:coach_names) { |team| team.coach_names }
node(:last_pick) do |team|
  current_pick = team.current_pick({})
  if !current_pick
    if team.alive
      {
          name: "No Pick | #{team.current_week.name}",
          abbrev: "No Pick | #{team.current_week.name}",
          locked: false
      }
    else
      incorrect_pick = team.picks.where(correct: false)[0]
      {
          name: "#{incorrect_pick.squad.short} | #{incorrect_pick.week.name}",
          abbrev: "#{incorrect_pick.squad.abbrev} | #{incorrect_pick.week.name}",
          locked: true
      }
    end
  else
    if current_pick.locked? || team.coach_ids.include?(@user.id)
      {
          name: "#{current_pick.squad.short} | #{current_pick.week.name}",
          abbrev: "#{current_pick.squad.abbrev} | #{current_pick.week.name}",
          locked: current_pick.locked?,
          week: current_pick.week.display
      }
    else
      {
          name: "Hidden | #{current_pick.week.name}",
          abbrev: "Hidden | #{current_pick.week.name}",
          locked: current_pick.locked?,
          week: current_pick.week.display
      }
    end
  end
end
child :league do
  attributes :id, :name, :season_id
end