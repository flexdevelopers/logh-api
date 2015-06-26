class SeasonDecorator < Draper::Decorator
  delegate_all

  def current
    object.current?
  end

  def started
    object.started?
  end

  def week_count
    object.weeks.count
  end

end
