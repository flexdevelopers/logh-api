require 'spec_helper'

describe WeekType do

  it { should respond_to(:description) }
  its(:description) { should be_blank }

end
