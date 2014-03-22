module AccessTokenSupport

  def api_token
    @api_token ||= AccessToken.new
  end

  def sign_in(user)
    request_with_api_token
    api_token.user = user
  end

  def sign_out(user)
    request_with_api_token
    api_token.user = nil
  end

  def request_with_api_token
    request.env['HTTP_AUTHORIZATION'] = api_token.token
  end
end
