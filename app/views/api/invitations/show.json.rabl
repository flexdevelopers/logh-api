object @invitation
cache @invitation
attributes :id, :league_id, :email, :message
node(:invitee) do |invitation|
  user = User.find_by(email: invitation.email)
  if user
    user.display_name
  else
    ""
  end
end
node(:accepted_at) { |invitation| (invitation.accepted_at) ? invitation.accepted_at.strftime("%b %d, %Y") : nil }
node(:updated_at) { |invitation| invitation.updated_at.strftime("%b %d, %Y") }
