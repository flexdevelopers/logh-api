object @team
attributes :id, :name, :active, :alive, :paid, :message
node(:started) { |team| team.league.started? }
node(:start_week) { |team| team.league.start_week.display }
node(:coach_ids) { |team| team.coach_ids }
node(:coach_names) { |team| team.coach_names }
node(:correct_picks_count) do |team|
  team.correct_picks_count({ week_id: (@week) ? @week.id : nil })
end
node(:current_pick) do |team|
  current_picks = team.current_picks({ week_id: (@week) ? @week.id : nil })
  if team.league.max_picks_per_week == 1
    if current_picks.any?
      if current_picks[0].locked? || team.coach_ids.include?(@user.id)
        if current_picks[0].game
          {
              name: "#{current_picks[0].squad.short} | #{current_picks[0].week.name} | #{current_picks[0].game.start_display_short}",
              abbrev: "#{current_picks[0].squad.abbrev} | #{current_picks[0].week.name} | #{current_picks[0].game.start_display_short}",
              correct: current_picks[0].correct,
              locked: current_picks[0].locked?
          }
        else
          {
              name: "#{current_picks[0].squad.short} | #{current_picks[0].week.name}",
              abbrev: "#{current_picks[0].squad.abbrev} | #{current_picks[0].week.name}",
              correct: current_picks[0].correct,
              locked: current_picks[0].locked?
          }
        end
      else
        {
            name: "Hidden | #{current_picks[0].week.name}",
            abbrev: "Hidden | #{current_picks[0].week.name}",
            correct: current_picks[0].correct,
            locked: current_picks[0].locked?
        }
      end
    else
      if team.alive
        {
            name: "No Pick | #{team.current_week.name}",
            abbrev: "No Pick | #{team.current_week.name}",
            warning: true
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
  else
    {
        name: "#{pluralize(current_picks.count, 'pick')} | #{team.current_week.name}",
        abbrev: "#{pluralize(current_picks.count, 'pick')} | #{team.current_week.name}",
        warning: (current_picks.count != team.league.max_picks_per_week && current_picks.count != team.current_week.games.count)
    }
  end
end
child :league do
  attributes :id, :name, :season_id, :max_picks_per_week
  node(:format) { |league| league.format }
end