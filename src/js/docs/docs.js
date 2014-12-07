module.exports = function($scope, $stateParams, config, jsonDocs) {

  $scope.docs = jsonDocs.data;
  $scope.baseURL = config.baseURL;

};
