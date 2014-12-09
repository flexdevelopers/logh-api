object @week
attributes :id, :week_type_id, :name, :description, :season_id, :starts_at, :ends_at, :complete
node(:display) { |week| week.display }
