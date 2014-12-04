object @season
attributes :id, :name
node(:current) { |season| season.current? }
node(:start_display) { |season| season.start_display }
node(:end_display) { |season| season.end_display }

