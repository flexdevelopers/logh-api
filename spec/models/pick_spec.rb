require 'spec_helper'

describe Pick do

  it { should respond_to(:team) }
  its(:team) { should be_nil }

end
