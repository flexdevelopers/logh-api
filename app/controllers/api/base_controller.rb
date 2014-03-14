class API::BaseController < ApplicationController
  before_action :_authenticate

  private

    def _authenticate
      authenticate_or_request_with_http_token do |token, options|
        APIKey.exists?(access_token: token)
      end
    end

end