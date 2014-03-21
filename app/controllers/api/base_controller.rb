class API::BaseController < ApplicationController
  before_action :authenticate

  private

    def authenticate
      not_authorized() unless access_token_validated && signed_in?
    end

    def access_token_validated
      _authorization_header && current_access_token.valid?
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

    def not_found(message = "Not Found")
      _error(message, 404)
    end

    def not_authorized(message = "Not Authorized")
      _error(message, :unauthorized)
    end

    def _authorization_header
      request.headers['HTTP_AUTHORIZATION']
    end

    def _error(message, status)
      render json: { error: message }, status: status
    end

end