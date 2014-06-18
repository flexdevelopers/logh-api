class Invitation < ActiveRecord::Base
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i

  before_save { email.downcase! }
  after_save :league_invitation_notification

  belongs_to :league

  validates :league, presence: true
  validates :email, presence: true, uniqueness: { scope: :league_id }, format: { with: VALID_EMAIL_REGEX }

  private

    def league_invitation_notification
      InvitationMailer.league_invitation(self).deliver
    end
end
