class Session
  include ActiveModel::Validations

  attr_accessor :email, :password

  validates :email, presence: true
  validates :password, presence: true

  def initialize(attributes = {})
    attributes.each do |attribute, value|
      send("#{attribute}=", value)
    end
  end

  def persisted?
    false
  end
end