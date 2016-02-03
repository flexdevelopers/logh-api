class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  before_filter :cors_set_access_control_headers
  before_filter :expire_hsts

  def cors_set_access_control_headers
    headers['Access-Control-Allow-Origin'] = 'http://www.loseorgohome.com'
    headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS'
    headers['Access-Control-Allow-Headers'] = '*, X-Requested-With, X-Prototype-Version, X-CSRF-Token, Content-Type'
    headers['Access-Control-Max-Age'] = "1728000"
  end

  def expire_hsts
    response.headers["Strict-Transport-Security"] = 'max-age=0'
  end

end
