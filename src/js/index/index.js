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
    $scope.selected = key;
    $scope.generateTableData(key);
    localStorage.gunnenatorGrid = key;
  };

  $scope.isSelected = function(key) {
    return $scope.selected == key;
  };

  $rootScope.$on('switchEngine', function(e) {
    $scope.generateTableData($scope.selected);
  });

};
