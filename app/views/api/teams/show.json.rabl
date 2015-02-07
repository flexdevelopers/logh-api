object @team
attributes :id, :name, :active, :alive, :paid, :message
node(:started) { |team| team.league.started? }
node(:start_week_display) { |team| team.league.start_week.display }
node(:commish_ids) { |team| team.commish_ids }
node(:coach_ids) { |team| team.coach_ids }
node(:coach_names) { |team| team.coach_names }
node(:current_picks_count) do |team|
  current_picks = team.current_picks({ week_id: (@week) ? @week.id : nil })
  current_picks.count
end
child :league do
  attributes :id, :name, :season_id, :max_picks_per_week
  node(:allow_dups) { |league| league.allow_dups }
  node(:format) { |league| league.format }
end