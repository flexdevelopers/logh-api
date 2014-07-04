object @team
attributes :id, :name, :paid, :alive
node(:coach_emails) { |team| team.coach_emails }
node(:coach_names) { |team| team.coach_names }
child :league do
  attributes :id, :name, :season_id, :started?
end