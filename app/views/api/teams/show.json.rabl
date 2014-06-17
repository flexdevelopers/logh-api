object @team
attributes :id, :name, :paid, :alive
node(:coach_emails) { |team| team.coach_emails }
child :league do
  attributes :id, :name, :season_id
end