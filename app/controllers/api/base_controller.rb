class API::BaseController < ApplicationController
  before_action :authenticate

  private

    def authenticate
      _not_authorized unless _authorization_header && current_access_token.valid?
    end

    def signed_in?
      !!current_access_token.user
    end

    def current_user
      current_access_token.user
    end

    def current_access_token
      @current_access_token ||= AccessToken.new(_authorization_header)
    end

    def _authorization_header
      request.headers['HTTP_AUTHORIZATION']
    end

    def _not_authorized(message = "Not Authorized")
      _error(message, :unauthorized)
    end

    def _error(message, status)
      render json: { error: message }, status: status
    end

end