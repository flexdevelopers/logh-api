object @team
attributes :id, :name, :paid, :alive
node(:coach_emails) { |team| team.coach_emails }
node(:coach_names) { |team| team.coach_names }
node(:current_pick_name) do |team|
  if team.coach_emails.include?(@user.email)
    team.current_pick_name
  else
    "Hidden"
  end
end
child :league do
  attributes :id, :name, :season_id, :started?
end