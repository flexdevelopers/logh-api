object @team
attributes :id, :name, :active, :alive, :paid, :message
node(:started) { |team| team.league.started? }
node(:start_week) { |team| team.league.start_week.display }
node(:correct_picks_count) { |team| team.correct_picks_count }
node(:coach_ids) { |team| team.coach_ids }
node(:coach_names) { |team| team.coach_names }
node(:last_pick_squad) do |team|
  if team.alive
    if !team.current_pick
      { name: "No Pick", abbrev: "No Pick" }
    else
      if team.current_pick.locked? || team.coach_ids.include?(@user.id)
        {
            name: "#{team.current_pick.squad.name} | #{team.current_pick.game.start_display_short}",
            abbrev: "#{team.current_pick.squad.abbrev} | #{team.current_pick.game.start_display_short}"
        }
      else
        { name: "Hidden | #{team.current_pick.week.name}", abbrev: "Hidden | #{team.current_pick.week.name}" }
      end
    end
  else
    incorrect_pick = team.picks.where(correct: false)[0]
    {
        name: "#{incorrect_pick.squad.name} | #{incorrect_pick.week.name}",
        abbrev: "#{incorrect_pick.squad.abbrev} | #{incorrect_pick.week.name}"
    }
  end
end
child :league do
  attributes :id, :name, :season_id
end