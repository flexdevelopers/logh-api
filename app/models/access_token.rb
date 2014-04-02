class AccessToken
  TTL = 20.minutes

  def initialize(existing_token = nil)
    @token = existing_token || MicroToken.generate(128)
    @redis = REDIS
    self.last_seen = Time.now unless ttl < 1
  end

  def token
    @token
  end

  def ttl
    return 0 if @deleted
    return TTL unless last_seen
    elapsed   = Time.now - last_seen
    remaining = (TTL - elapsed).floor
    remaining > 0 ? remaining : 0
  end

  def last_seen
    @last_seen ||= _get_last_seen
  end

  def last_seen=(as_at)
    _set_with_expire("access_token/#{token}/last_seen", as_at.iso8601)
    @last_seen = as_at
  end

  def user
    return if ttl < 1
    @user ||= _get_user
  end

  def user=(user)
    return if !user
    _set_with_expire("access_token/#{token}/user_id", user.id)
    @user = user
  end

  def valid?
    !expired?
  end

  def expired?
    ttl < 1
  end

  def delete!
    @redis.del("access_token/#{token}/last_seen", "access_token/#{token}/user_id")
    @deleted = true
  end

  private

    def _set_with_expire(key,val)
      @redis[key] = val
      @redis.expire(key, TTL)
    end

    def _get_last_seen
      last_seen = @redis["access_token/#{token}/last_seen"]
      last_seen && Time.parse(last_seen)
    end

    def _get_user
      user_id = @redis["access_token/#{token}/user_id"]
      User.find(user_id) if user_id
    end

end