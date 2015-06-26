object @team
attributes :id,
           :name,
           :active,
           :message,
           :alive,
           :started,
           :start_week_display,
           :commish_ids,
           :coach_ids,
           :coach_names,
           :current_week_name,
           :current_week_game_count,
           :current_picks_count

child :league do
  attributes :id,
             :name,
             :season_id,
             :elimination,
             :max_picks_per_week,
             :allow_dups,
             :format

  node(:season_name) { |league| league.season.name }
end