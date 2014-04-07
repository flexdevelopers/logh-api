require 'spec_helper'

describe WeekType do

  it { should respond_to(:code) }
  its(:code) { should be_blank }

  it { should respond_to(:description) }
  its(:description) { should be_blank }

end
