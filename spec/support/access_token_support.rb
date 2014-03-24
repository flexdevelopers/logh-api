module AccessTokenSupport

  def access_token
    @access_token ||= AccessToken.new
  end

  def sign_in(user)
    request_with_access_token
    access_token.user = user
  end

  def sign_out(user)
    request_with_access_token
    access_token.user = nil
  end

  def request_with_access_token
    request.env['HTTP_AUTHORIZATION'] = access_token.token
  end
end
