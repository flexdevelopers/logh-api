var SeasonModel = function() {

  var model = this;

  var seasons = [];
  var currentSeasons = [];
  var startedSeasons = [];
  var endedSeasons = [];
  var selectedSeasonId;
  var loaded = false;

  this.seasons = seasons;
  this.currentSeasons = currentSeasons;
  this.startedSeasons = startedSeasons;
  this.endedSeasons = endedSeasons;
  this.selectedSeasonId = selectedSeasonId;
  this.loaded = loaded;

  this.getCurrentSeason = function() {
    return model.currentSeasons[0];
  };

  this.setSeasons = function(seasonsArray) {
    if (!angular.isArray(seasonsArray)) return;
    model.seasons = seasonsArray;
    model.currentSeasons = _.filter(seasonsArray, function(season) {
      return season.current;
    });
    model.startedSeasons = _.filter(seasonsArray, function(season) {
      return season.started;
    });
    model.endedSeasons = _.filter(seasonsArray, function(season) {
      return season.ended;
    });
    model.setSelectedSeasonId(model.getCurrentSeason().id);
    model.loaded = true;
  };

  this.setSelectedSeasonId = function(seasonId) {
    model.selectedSeasonId = seasonId;
  };

};

SeasonModel.$inject = [];
module.exports = SeasonModel;