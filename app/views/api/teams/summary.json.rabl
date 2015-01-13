object @team
attributes :id, :name, :active, :alive, :paid, :message
node(:started) { |team| team.league.started? }
node(:start_week) { |team| team.league.start_week.display }
node(:coach_ids) { |team| team.coach_ids }
node(:coach_names) { |team| team.coach_names }
node(:correct_picks_count) do |team|
  team.correct_picks_count({ week_id: @week_id })
end
node(:last_pick) do |team|
  if team.alive
    if !team.current_pick
      if team.current_week
        {
            name: "No Pick | #{team.current_week.name}",
            abbrev: "No Pick | #{team.current_week.name}",
            correct: nil,
            locked: false
        }
      else
        {
            name: "No Pick",
            abbrev: "No Pick",
            correct: nil,
            locked: false
        }
      end
    else
      if team.current_pick.locked? || team.coach_ids.include?(@user.id)
        if team.current_pick.game
          {
              name: "#{team.current_pick.squad.short} | #{team.current_pick.week.name} | #{team.current_pick.game.start_display_short}",
              abbrev: "#{team.current_pick.squad.abbrev} | #{team.current_pick.week.name} | #{team.current_pick.game.start_display_short}",
              correct: team.current_pick.correct,
              locked: team.current_pick.locked?
          }
        else
          {
              name: "#{team.current_pick.squad.short} | #{team.current_pick.week.name}",
              abbrev: "#{team.current_pick.squad.abbrev} | #{team.current_pick.week.name}",
              correct: team.current_pick.correct,
              locked: team.current_pick.locked?
          }
        end
      else
        {
            name: "Hidden | #{team.current_pick.week.name}",
            abbrev: "Hidden | #{team.current_pick.week.name}",
            correct: team.current_pick.correct,
            locked: team.current_pick.locked?
        }
      end
    end
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
child :league do
  attributes :id, :name, :season_id
end