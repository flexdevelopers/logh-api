object @season
attributes :id, :name, :season_type, :starts_at, :ends_at
node(:current) { |season| season.current? }
node(:started) { |season| season.started? }
node(:week_count) { |season| season.weeks.count }
node(:start_display) { |season| season.start_display }
node(:end_display) { |season| season.end_display }

