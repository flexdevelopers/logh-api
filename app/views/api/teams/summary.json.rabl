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
      if current_picks[0].locked? || team.coach_ids.include?(@user.id)
        if current_picks[0].game
          {
              name: "#{current_picks[0].squad.short} | #{week_name} | #{current_picks[0].game.start_display_short}",
              abbrev: "#{current_picks[0].squad.abbrev} | #{week_name} | #{current_picks[0].game.start_display_short}",
              correct: current_picks[0].correct,
              tie: current_picks[0].game.tie?,
              locked: current_picks[0].locked?
          }
        else
          {
              name: "#{current_picks[0].squad.short} | #{week_name}",
              abbrev: "#{current_picks[0].squad.abbrev} | #{week_name}",
              correct: current_picks[0].correct,
              locked: current_picks[0].locked?
          }
        end
      else
        {
            name: "Hidden | #{week_name}",
            abbrev: "Hidden | #{week_name}",
            correct: current_picks[0].correct,
            tie: false,
            locked: current_picks[0].locked?
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
        incorrect_pick = team.picks.where(correct: false)[0]
        if incorrect_pick.game
          {
              name: "#{incorrect_pick.squad.short} | #{incorrect_pick.week.name} | #{incorrect_pick.game.start_display_short}",
              abbrev: "#{incorrect_pick.squad.abbrev} | #{incorrect_pick.week.name} | #{incorrect_pick.game.start_display_short}",
              locked: true,
              correct: false,
              tie: incorrect_pick.game.tie?
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
    if @week
      {
          name: "#{pluralize(current_picks.count, 'pick')} | #{week_name}",
          abbrev: "#{pluralize(current_picks.count, 'pick')} | #{week_name}",
          warning: ((@week && @week.id == team.current_week.id) && current_picks.count != team.league.max_picks_per_week && current_picks.count != team.current_week.games.count)
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