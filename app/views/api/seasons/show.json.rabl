object @season
attributes :id, :name
node(:current) { |season| season.current? }
