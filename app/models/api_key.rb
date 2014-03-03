class APIKey < ActiveRecord::Base
  before_validation :generate_access_token, on: :create

  validates :access_token, presence: true, uniqueness: true

  private

    def generate_access_token
      begin
        self.access_token = SecureRandom.hex
      end while self.class.exists?(access_token: access_token)
    end

end
