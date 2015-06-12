class API::BaseController < ApplicationController
  SUCCESS = 'success'
  INFO = 'info'
  WARNING = 'warning'
  DANGER = 'danger'

  respond_to :json

  before_action :authenticate
  before_action :check_guest

  private

    def authenticate
      not_authorized("Please sign in or register.", WARNING) unless access_token_validated && signed_in?
    end

    def check_guest
      forbidden("Forbidden action. Please sign out, then sign in with email or register.", DANGER) if current_access_token.user.guest && !request.get?
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
    def not_authorized(message = "Authentication failure.", type = DANGER)
      error(message, type, :unauthorized)
    end

    #403 - authorization failures
    def forbidden(message = "Forbidden", type = DANGER)
      error(message, type, :forbidden)
    end

    # 404 - my head if not attached
    def not_found(message = "Not Found", type = WARNING)
      error(message, type, :not_found)
    end

    def payload(data, message = '')
      render json: { payload: data, message: { type: SUCCESS, content: message } }, status: :ok
    end

    def error(message, type, status)
      render json: { message: { type: type, content: message } }, status: status
    end

    def _authorization_header
      request.headers['HTTP_AUTHORIZATION']
    end

end