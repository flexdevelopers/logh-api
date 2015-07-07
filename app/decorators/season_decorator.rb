class SeasonDecorator < Draper::Decorator
  delegate_all

  def current
    object.current?
  end

  def started
    object.started?
  end

  def ended
    object.ended?
  end

  def week_count
    object.weeks.count
  end

  def start_display
    object.start_display
  end

  def end_display
    object.end_display
  end

end
