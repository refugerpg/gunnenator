module.exports = function($rootScope, $scope, $stateParams, $http, core, config) {

  $scope.baseURL = config.baseURL;
  $scope.checkboxes = {};
  $scope.bStats = false;

  $scope.generateTableData = function(key) {

    var request = {};
        request.data = {};
        request.data.weapons = [];
        request.data.ammo = $scope.ammo;
        request.format = 'short';
        request.similar = false;
        request.statistics = $scope.bStats;

    request.data.weapons = $scope.weapons[key];
    var response = core.get(request);
    $scope.cdefs = response.columns;
    $scope.tableData = response.data;
    $scope.stats = response.stats;
  };

  $http.get('json/data.json').success(function(data) {
    $scope.weapons = data.weapons;
    $scope.ammo = data.ammo;
    $scope.select(localStorage.gunnenatorGrid ? localStorage.gunnenatorGrid : 0);
  });

  $scope.select = function(key) {
    for (var i=0; i < $scope.weapons.length; i++) {
      $scope.weapons[i].tabActive = (i == key) ? true : false;
    }
    $scope.generateTableData(key);
    localStorage.gunnenatorGrid = key;
  };

  $rootScope.$on('switchEngine', function(e) {
    $scope.generateTableData($scope.selected);
  });

};
