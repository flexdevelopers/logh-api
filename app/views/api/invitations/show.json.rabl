object @invitation
attributes :id, :league_id, :email, :message
node(:accepted_at) { |invitation| (invitation.accepted_at) ? invitation.accepted_at.strftime("%b %d, %Y") : nil }
node(:updated_at) { |invitation| invitation.updated_at.strftime("%b %d, %Y") }
