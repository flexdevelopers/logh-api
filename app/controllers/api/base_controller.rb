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

    # 401 - authentication failures
    def not_authorized(type = "warning", message = "The server was unable to validate your log in credentials. Please sign in again.")
      _error(type, message, :unauthorized)
    end

    #403 - authorization failures
    def forbidden(type = "danger", message = "Forbidden")
      _error(type, message, :forbidden)
    end

    # 404 - my head if not attached
    def not_found(type = "warning", message = "Not Found")
      _error(type, message, :not_found)
    end

    def _authorization_header
      request.headers['HTTP_AUTHORIZATION']
    end

    def _error(type, message, status)
      render json: { error: { type: type, content: message } }, status: status
    end

end