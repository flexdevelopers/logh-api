require 'spec_helper'

describe APIKey do

  it { should respond_to(:token) }
  its(:token) { should be_nil }

end
