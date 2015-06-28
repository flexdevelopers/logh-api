class GameDecorator < Draper::Decorator
  delegate_all

  def display
    object.display
  end

  def start_display
    object.start_display
  end

  def start_display_short
    object.start_display_short
  end

  def ot_display
    object.ot_display
  end

  def locked
    object.locked?
  end

  def started
    object.started?
  end

  def week_name
    object.week.name
  end

  def week_type
    object.week.week_type.description
  end

  def week_type_id
    object.week_type_id
  end

  def pick_count
    object.picks.count
  end

end
