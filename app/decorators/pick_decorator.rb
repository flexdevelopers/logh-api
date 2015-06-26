class PickDecorator < Draper::Decorator
  delegate_all

  def initialize(pick, user)
    super(pick)
    @user = user
  end

  def locked
    object.locked?
  end

  def game_id
    game = object.game
    if game && (object.locked? || object.coach_ids.include?(@user.id))
      game.id
    else
      0
    end
  end

  def squad_id
    if object.locked? || object.coach_ids.include?(@user.id)
      object.squad.id
    else
      0
    end
  end

  def week
    week = object.week
    week_type = object.week_type
    {
        name: week.name,
        slug: week.slug,
        date: week.starts_at,
        type: week_type.description
    }
  end

  def game
    game = object.game
    if game && (object.locked? || object.coach_ids.include?(@user.id))
      squads = game.squads
      if game.complete
        display = "#{squads[0][:short]} [ #{game.visiting_squad_score} ] @ #{squads[1][:short]} [ #{game.home_squad_score} ] #{game.ot_display}"
      elsif game.incomplete?
        display = "[ Incomplete ]" # this is an incomplete game. this happens to ppd games that never get resolved.
      else
        display = "#{squads[0][:short]} [ #{game.visiting_squad.record} ] @ #{squads[1][:short]} [ #{game.home_squad.record} ]"
      end
      {
          id: game.id,
          display: display,
          start: game.starts_at,
          tbd: game.tbd,
          postponed: game.postponed,
          if_necessary: game.if_necessary,
          tie: game.tie?,
          incomplete: game.incomplete?,
          note: game.note
      }
    end
  end

  def squad
    squad = object.squad
    if object.locked? || object.coach_ids.include?(@user.id)
      {
          id: squad.id,
          name: squad.name,
          abbrev: squad.abbrev,
          short: squad.short
      }
    else
      {
          id: 0,
          name: "Hidden",
          abbrev: "Hidden",
          short: "Hidden"
      }
    end
  end

end
