var WeekPicksFilter = function() {
  return function(picks, weekSlug) {
    if (!weekSlug || weekSlug == 'all') {
      return picks;
    }
    var weekPicks = _.filter(picks, function(pick) {
      return pick.week_slug == weekSlug;
    });
    return weekPicks;
  };
};

WeekPicksFilter.$inject = [];
module.exports = WeekPicksFilter;
