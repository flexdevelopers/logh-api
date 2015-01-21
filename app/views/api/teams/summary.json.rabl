object @team
attributes :id, :name, :active, :alive, :paid, :message
node(:started) { |team| team.league.started? }
node(:start_week) { |team| team.league.start_week.display }
node(:coach_ids) { |team| team.coach_ids }
node(:coach_names) { |team| team.coach_names }
node(:correct_picks_count) do |team|
  team.correct_picks_count({ week_id: (@week) ? @week.id : nil })
end
node(:last_pick) do |team|
  current_pick = team.current_pick({ week_id: (@week) ? @week.id : nil })
  if current_pick
    if current_pick.locked? || team.coach_ids.include?(@user.id)
      if current_pick.game
        {
            name: "#{current_pick.squad.short} | #{current_pick.week.name} | #{current_pick.game.start_display_short}",
            abbrev: "#{current_pick.squad.abbrev} | #{current_pick.week.name} | #{current_pick.game.start_display_short}",
            correct: current_pick.correct,
            locked: current_pick.locked?
        }
      else
        {
            name: "#{current_pick.squad.short} | #{current_pick.week.name}",
            abbrev: "#{current_pick.squad.abbrev} | #{current_pick.week.name}",
            correct: current_pick.correct,
            locked: current_pick.locked?
        }
      end
    else
      {
          name: "Hidden | #{current_pick.week.name}",
          abbrev: "Hidden | #{current_pick.week.name}",
          correct: current_pick.correct,
          locked: current_pick.locked?
      }
    end
  else
    if team.alive
      {
          name: "No Pick | #{team.current_week.name}",
          abbrev: "No Pick | #{team.current_week.name}",
          correct: nil,
          locked: false
      }
    else
      incorrect_pick = team.picks.where(correct: false)[0]
      if incorrect_pick.game
        {
            name: "#{incorrect_pick.squad.short} | #{incorrect_pick.week.name} | #{incorrect_pick.game.start_display_short}",
            abbrev: "#{incorrect_pick.squad.abbrev} | #{incorrect_pick.week.name} | #{incorrect_pick.game.start_display_short}",
            locked: true,
            correct: false
        }
      else
        {
            name: "#{incorrect_pick.squad.short} | #{incorrect_pick.week.name}",
            abbrev: "#{incorrect_pick.squad.abbrev} | #{incorrect_pick.week.name}",
            locked: true,
            correct: false
        }
      end
    end
  end
end
child :league do
  attributes :id, :name, :season_id
end