class API::BaseController < ApplicationController
  SUCCESS = 'success'
  INFO = 'info'
  WARNING = 'warning'
  DANGER = 'danger'

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
    def not_authorized(type = DANGER, message = "Authorization failure. Please sign in again.")
      error(type, message, :unauthorized)
    end

    #403 - authorization failures
    def forbidden(type = DANGER, message = "Forbidden")
      error(type, message, :forbidden)
    end

    # 404 - my head if not attached
    def not_found(type = WARNING, message = "Not Found")
      error(type, message, :not_found)
    end

    def payload(data, message = '')
      render json: { payload: data, message: { type: SUCCESS, content: message } }, status: :ok
    end

    def error(type, message, status)
      render json: { message: { type: type, content: message } }, status: status
    end

    def _authorization_header
      request.headers['HTTP_AUTHORIZATION']
    end

end