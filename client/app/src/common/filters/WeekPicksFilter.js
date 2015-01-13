var WeekPicksFilter = function() {
  return function(picks, weekId) {
    if (!weekId || isNaN(weekId)) {
      return picks;
    }
    var weekPicks = _.filter(picks, function(pick) {
      return pick.week_id == weekId;
    });
    return weekPicks;
  };
};

WeekPicksFilter.$inject = [];
module.exports = WeekPicksFilter;
