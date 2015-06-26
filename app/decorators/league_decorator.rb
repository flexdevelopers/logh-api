class LeagueDecorator < Draper::Decorator
  delegate_all

  def initialize(league)
    super(league)
  end

  def started
    object.started?
  end

  def closed
    object.closed?
  end

  def format
    object.format
  end

  def team_count
    object.teams.active.count
  end

  def alive_team_count
    object.teams.active.alive.count
  end

  def start_week_display
    object.start_week.display
  end

  def start_week
    object.start_week.display
  end

  def season_name
    object.season.name
  end

end
