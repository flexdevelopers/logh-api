var SeasonModel = function($log) {

  var model = this;

  var seasons = [];
  var currentSeasons = [];
  var startedSeasons = [];
  var loaded = false;

  this.seasons = seasons;
  this.currentSeasons = currentSeasons;
  this.startedSeasons = startedSeasons;
  this.loaded = loaded;

  this.setSeasons = function(seasonsArray) {
    if (!_.isArray(seasonsArray)) return;
    model.seasons = seasonsArray;
    model.currentSeasons = _.filter(seasonsArray, function(season) {
      return season.current;
    });
    model.startedSeasons = _.filter(seasonsArray, function(season) {
      return season.started;
    });
    model.loaded = true;
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("creating season model...");
  };
  init();

};

SeasonModel.$inject = ['$log'];
module.exports = SeasonModel;