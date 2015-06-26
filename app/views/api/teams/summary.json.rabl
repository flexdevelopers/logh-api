object @team
attributes :id,
           :name,
           :active,
           :eliminated_at,
           :message,
           :alive,
           :started,
           :start_week,
           :coach_ids,
           :coach_names,
           :week_ends_at,
           :correct_picks_count,
           :current_pick

child :league do
  attributes :id,
             :name,
             :season_id,
             :max_picks_per_week,
             :format
end