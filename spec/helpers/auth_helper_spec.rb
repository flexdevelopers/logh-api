require 'spec_helper'

def bypass_http_token_authentication_on(klass)
  klass.class_eval do
    define_method :authenticate do
      true
    end
  end
end
