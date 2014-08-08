object @week
attributes :id, :week_type_id, :number, :season_id, :starts_at, :ends_at, :complete
node(:display) { |week| week.display }