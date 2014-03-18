class APIKey < ActiveRecord::Base
  before_validation :_generate_api_key_token, on: :create

  validates :token, presence: true, uniqueness: true

  private

    def _generate_api_key_token
      begin
        self.token = SecureRandom.hex
      end while self.class.exists?(token: token)
    end

end
