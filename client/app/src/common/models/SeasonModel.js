var SeasonModel = function($log) {

  var model = this;

  var seasons = [];
  var currentSeasons = [];
  var loaded = false;

  this.seasons = seasons;
  this.currentSeasons = currentSeasons;
  this.loaded = loaded;

  this.setSeasons = function(seasonsArray) {
    if (!_.isArray(seasonsArray)) return;
    model.seasons = seasonsArray;
    model.currentSeasons = _.filter(seasonsArray, function(season) {
      return season.current;
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