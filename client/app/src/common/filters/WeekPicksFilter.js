var WeekPicksFilter = function($log) {
  return function(picks, week, elimination) {
    if (!week) {
      return picks;
    }
    var weekPicks = [];
    $log.debug('elimination: ' + elimination);
    if (elimination) {
      // for survivor leagues, gonna show picks up to the week you selected...
      weekPicks = _.filter(picks, function(pick) {
        return moment(pick.week_date).isBefore(week.starts_at) || moment(pick.week_date).isSame(week.starts_at);
      });
    } else {
      // for pick'em leagues, gonna show ONLY picks for the week you selected...
      weekPicks = _.filter(picks, function(pick) {
        return pick.week_slug == week.slug;
      });
    }
    return weekPicks;
  };
};

WeekPicksFilter.$inject = ['$log'];
module.exports = WeekPicksFilter;
