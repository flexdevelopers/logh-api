object @team
attributes :id, :name, :paid, :alive
child :league do
  attributes :id, :name, :season_id
end