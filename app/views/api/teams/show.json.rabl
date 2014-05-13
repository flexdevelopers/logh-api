object @team
attributes :id, :name, :paid
child :league do
  attributes :id, :name, :season_id
end