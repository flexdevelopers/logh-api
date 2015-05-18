object @team
attributes :id, :name, :active, :eliminated_at, :paid, :message
node(:alive) { |team| team.alive? }
node(:started) { |team| team.league.started? }
node(:start_week) { |team| team.league.start_week.display }
node(:coach_ids) { |team| team.coach_ids }
node(:coach_names) { |team| team.coach_names }
node(:week_ends_at) { |team| (@week) ? @week.ends_at : nil }
node(:correct_picks_count) do |team|
  # if survivor, we want correct picks count for ALL weeks
  team.correct_picks_count({ week_id: (@week) ? @week.id : nil, elimination: team.league.elimination })
end
node(:current_pick) do |team|
  current_picks = team.current_picks({ week_id: (@week) ? @week.id : nil })
  week_name = @week ? @week.name : team.current_week.name
  if team.league.max_picks_per_week == 1
    if current_picks.any?
      current_pick = current_picks[0] # can only make one pick, right?
      current_pick_game = current_pick.game
      current_pick_squad = current_pick.squad
      if current_pick.locked? || team.coach_ids.include?(@user.id)
        if current_pick_game
          if current_pick_game.note && current_pick_game.note.length > 0
            name = "#{current_pick_squad.short} | #{week_name} | #{current_pick_game.note}"
          else
            name = "#{current_pick_squad.short} | #{week_name} | #{current_pick_game.start_display_short}"
          end
          {
              name: name,
              abbrev: "#{current_pick_squad.abbrev} | #{week_name} | #{current_pick_game.start_display_short}",
              correct: current_pick.correct,
              tie: current_pick_game.tie?,
              incomplete: current_pick_game.incomplete?,
              locked: current_pick.locked?
          }
        else
          {
              name: "#{current_pick_squad.short} | #{week_name}",
              abbrev: "#{current_pick_squad.abbrev} | #{week_name}",
              correct: current_pick.correct,
              locked: current_pick.locked?
          }
        end
      else
        {
            name: "Hidden | #{week_name}",
            abbrev: "Hidden | #{week_name}",
            correct: current_pick.correct,
            locked: current_pick.locked?
        }
      end
    else
      if team.alive?
        {
            name: "No Pick | #{week_name}",
            abbrev: "No Pick | #{week_name}",
            warning: !@week || @week.id == team.current_week.id
        }
      else
        incorrect_pick = team.picks.where(correct: false)[0] # if team is dead, what's the first incorrect pick? we'll show that...
        incorrect_pick_game = incorrect_pick.game
        incorrect_pick_squad = incorrect_pick.squad
        incorrect_pick_week = incorrect_pick.week
        if incorrect_pick_game
          if incorrect_pick_game.note && incorrect_pick_game.note.length > 0
            name = "#{incorrect_pick_squad.short} | #{incorrect_pick_week.name} | #{incorrect_pick_game.note}"
          else
            name = "#{incorrect_pick_squad.short} | #{incorrect_pick_week.name} | #{incorrect_pick_game.start_display_short}"
          end
          {
              name: name,
              abbrev: "#{incorrect_pick_squad.abbrev} | #{incorrect_pick_week.name} | #{incorrect_pick_game.start_display_short}",
              locked: true,
              correct: false,
              tie: incorrect_pick_game.tie?
          }
        else
          {
              name: "#{incorrect_pick_squad.short} | #{incorrect_pick_week.name}",
              abbrev: "#{incorrect_pick_squad.abbrev} | #{incorrect_pick_week.name}",
              locked: true,
              correct: false
          }
        end
      end
    end
  else
    if @week
      {
          name: "#{pluralize(current_picks.count, 'pick')} | #{week_name}",
          abbrev: "#{pluralize(current_picks.count, 'pick')} | #{week_name}",
          warning: ((@week && @week.id == team.current_week.id) && current_picks.count == 0)
      }
    else
      all_picks_count = team.picks.not_none.count
      {
          name: "#{pluralize(all_picks_count, 'pick')} | All Weeks",
          abbrev: "#{pluralize(all_picks_count, 'pick')} | All Weeks",
      }
    end
  end
end
child :league do
  attributes :id, :name, :season_id, :max_picks_per_week
  node(:format) { |league| league.format }
end