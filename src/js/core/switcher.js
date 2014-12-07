module.exports = function($scope, config) {

  $scope.engines = config.engines;

  $scope.switch = function(engine) {
    config.set(engine);
    localStorage.gunneratorEngine = engine;
  };

  $scope.isSelected = function(item) {
    return config.get() == item;
  };

};
