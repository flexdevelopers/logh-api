class TeamDecorator < Draper::Decorator
  delegate_all

  def initialize(team, user, week)
    super(team)
    @user = user
    @week = week
  end

  def alive
    object.alive?
  end

  def started
    object.league.started?
  end

  def start_week
    object.league.start_week.display
  end

  def start_week_display
    object.league.start_week.display
  end

  def current_week_name
    object.current_week.name
  end

  def current_week_game_count
    object.current_week.games.count
  end

  def current_picks_count
    current_picks = object.current_picks({ week_id: (@week) ? @week.id : nil })
    current_picks.count
  end

  def week_ends_at
    (@week) ? @week.ends_at : nil
  end

  def correct_picks_count
    # if survivor, we want correct picks count for ALL weeks
    object.correct_picks_count({ week_id: (@week) ? @week.id : nil, elimination: object.league.elimination })
  end

  def current_pick
    current_picks = object.current_picks({ week_id: (@week) ? @week.id : nil })
    week_name = @week ? @week.name : object.current_week.name
    if object.league.max_picks_per_week == 1
      if current_picks.any?
        current_pick = current_picks[0] # can only make one pick, right?
        current_pick_game = current_pick.game
        current_pick_squad = current_pick.squad
        if current_pick.locked? || object.coach_ids.include?(@user.id)
          if current_pick_game
            if current_pick_game.note && current_pick_game.note.length > 0
              name = "#{current_pick_squad.short} | #{week_name} | #{current_pick_game.note}"
              abbrev = "#{current_pick_squad.abbrev} | #{week_name} | #{current_pick_game.note}"
            else
              name = "#{current_pick_squad.short} | #{week_name} | #{current_pick_game.start_display_short}"
              abbrev = "#{current_pick_squad.abbrev} | #{week_name} | #{current_pick_game.start_display_short}"
            end
            {
                name: name,
                abbrev: abbrev,
                correct: current_pick.correct,
                tie: current_pick_game.tie?,
                incomplete: current_pick_game.incomplete?,
                locked: current_pick.locked?
            }
          else
            {
                name: "#{current_pick_squad.short} | #{week_name}",
                abbrev: "#{current_pick_squad.abbrev} | #{week_name}",
                correct: current_pick.correct,
                locked: current_pick.locked?
            }
          end
        else
          {
              name: "Hidden | #{week_name}",
              abbrev: "Hidden | #{week_name}",
              correct: current_pick.correct,
              locked: current_pick.locked?
          }
        end
      else
        if object.alive?
          {
              name: "No Pick | #{week_name}",
              abbrev: "No Pick | #{week_name}",
              warning: !@week || @week.id == object.current_week.id
          }
        else
          incorrect_pick = object.picks.where(correct: false)[0] # if team is dead, what's the first incorrect pick? we'll show that...
          incorrect_pick_game = incorrect_pick.game
          incorrect_pick_squad = incorrect_pick.squad
          incorrect_pick_week = incorrect_pick.week
          if incorrect_pick_game
            if incorrect_pick_game.note && incorrect_pick_game.note.length > 0
              name = "#{incorrect_pick_squad.short} | #{incorrect_pick_week.name} | #{incorrect_pick_game.note}"
            else
              name = "#{incorrect_pick_squad.short} | #{incorrect_pick_week.name} | #{incorrect_pick_game.start_display_short}"
            end
            {
                name: name,
                abbrev: "#{incorrect_pick_squad.abbrev} | #{incorrect_pick_week.name} | #{incorrect_pick_game.start_display_short}",
                locked: true,
                correct: false,
                tie: incorrect_pick_game.tie?
            }
          else
            {
                name: "#{incorrect_pick_squad.short} | #{incorrect_pick_week.name}",
                abbrev: "#{incorrect_pick_squad.abbrev} | #{incorrect_pick_week.name}",
                locked: true,
                correct: false
            }
          end
        end
      end
    else
      if @week
        {
            name: "#{helpers.pluralize(current_picks.count, 'pick')} | #{week_name}",
            abbrev: "#{helpers.pluralize(current_picks.count, 'pick')} | #{week_name}",
            warning: ((@week && @week.id == object.current_week.id) && current_picks.count == 0)
        }
      else
        all_picks_count = object.picks.not_none.count
        {
            name: "#{helpers.pluralize(all_picks_count, 'pick')} | All Weeks",
            abbrev: "#{helpers.pluralize(all_picks_count, 'pick')} | All Weeks",
        }
      end
    end
  end

end
