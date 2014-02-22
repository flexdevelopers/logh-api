class API::AuthController < ApplicationController
  before_action :authenticate

  protected

    def authenticate
      authenticate_or_request_with_http_token do |token, options|
        APIKey.exists?(access_token: token)
      end
    end

end