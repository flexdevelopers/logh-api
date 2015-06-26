class InvitationDecorator < Draper::Decorator
  delegate_all

  def initialize(invitation, user)
    super(invitation)
    @user = user
  end

  def invitee
    if @user
      @user.display_name
    else
      ""
    end
  end

  def accepted_at
    (object.accepted_at) ? object.accepted_at.strftime("%b %d, %Y") : nil
  end

  def updated_at
    object.updated_at.strftime("%b %d, %Y")
  end

end
