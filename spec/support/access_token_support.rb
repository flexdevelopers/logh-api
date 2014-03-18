module AccessTokenSupport

  def api_token
    @api_token ||= AccessToken.new
  end

  def sign_in(user)
    api_token.user = user
    request_with_api_token
  end

  def sign_out(user)
    api_token.user = nil
    request_with_api_token
  end

  def request_with_api_token
    request.env['HTTP_AUTHORIZATION'] = api_token.token
  end
end
