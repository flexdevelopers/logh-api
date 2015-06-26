class WeekDecorator < Draper::Decorator
  delegate_all

  def type
    object.week_type.description
  end

  def display
    object.display
  end

  def season_type
    object.season.season_type
  end

  def game_count
    object.games.count
  end

  def game_complete_count
    object.games.complete.count
  end

  def game_tbd_count
    object.games.tbd.count
  end

end
