require 'spec_helper'

describe Pick do
  it { should respond_to(:created_at) }
  it { should respond_to(:updated_at) }
  it { should respond_to(:team) }
end
