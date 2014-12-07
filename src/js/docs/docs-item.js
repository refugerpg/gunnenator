module.exports = function($scope, $stateParams, jsonDocs, $filter) {
  $scope.item = $filter('docsFilter')(jsonDocs.data, {"prefix" : $stateParams.prefix, "item" : $stateParams.item});
  $scope.prefix = $stateParams.prefix;
  $scope.shortStats = ($scope.item.shortStats == "true") ? "<i class='text-success fa fa-check'></i> available in format = 'short'" : "<i class='text-danger fa fa-times'></i> not available in format = 'short'.";
  $scope.longStats = ($scope.item.longStats == "true") ? "<i class='text-success fa fa-check'></i> available in format = 'long'" : "<i class='text-danger fa fa-times'></i> not available in format = 'long'.";
};
