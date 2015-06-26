class GameDecorator < Draper::Decorator
  delegate_all

  def started
    object.started?
  end

  def locked
    object.locked?
  end

  def week_name
    object.week.name
  end

  def week_type
    object.week.week_type.description
  end

  def pick_count
    object.picks.count
  end

end
