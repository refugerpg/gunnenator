var angular = require('angular');
var angularuirouter = require('angular-ui-router');
var uigrid = require('ui-grid');
var uibootstrap = require('angular-bootstrap');
var angularsanitize = require('angular-sanitize');
var gunnenator = angular.module('gunnerator', ['ui.grid', 'ui.router', 'ui.bootstrap', 'ngSanitize']);
var engines = [
  {"name" : "Refuge", "engine" : require('./core/refuge')}
];

var switchEngine = new Event('switchEngine');

// Instantiate all the services!

for (var i=0; i < engines.length; i++) {
  gunnenator.service(engines[i].name, engines[i].engine)
    .filter(engines[i].name + "ItemFilter", engines[i].engine().filter);
}

gunnenator.factory('core', require('./core/core'))

.service('config', function($rootScope) {

  this.engines = engines;
  if (localStorage.gunnenatorEngine) {
    this.engine = localStorage.gunnenatorEngine;
  } else {
    this.engine = engines[0].name;
  }
  this.baseURL = "";

  this.get = function() {
    return this.engine;
  };
  this.set = function(item) {
    this.engine = item;
    $rootScope.$broadcast('switchEngine');
  };
})

.controller('switcher', require("./core/switcher"))
.controller('index', require('./index/index'))
.controller('item', require('./item/item'))
.controller('type', require('./item/type'))
.controller('docs', require('./docs/docs'))
.controller('docsItem', require('./docs/docs-item'))
.filter('docsFilter', require('./docs/docs-filter'))
.filter('prettyCase', function() {
  return function(input, uppercase) {
    input = input || '';
    var out = "";
    for (var i = 0; i < input.length; i++) {
      if (input.charAt(i) == "_") {
        out += " ";
      } else {
        out += input.charAt(i);
      }
    }
    return out;
  };
})

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('index', {
      url: "/",
      templateUrl: "partials/index.html",
      controller: 'index'
    })
    .state('docs', {
      url: "/docs/",
      templateUrl: "partials/docs.html",
      controller: 'docs',
      resolve: {
        jsonDocs : function($http) {
          return $http({method: 'GET', url: 'json/docs.json'});
        }
      }
    })
    .state('docs.prefix', {
      url: "{prefix}/",
      controller: function($scope, $stateParams, jsonDocs, config, $filter) {
        $scope.item = $filter('docsFilter')(jsonDocs.data, {"prefix" : $stateParams.prefix});
        $scope.baseURL = config.baseURL;
      },
      templateUrl: 'partials/docs-prefix.html'
    })
    .state('docs.item', {
      url: "{prefix}/{item}/",
      controller: 'docsItem',
      templateUrl: 'partials/docs-item.html'
    })
    .state('weapon', {
      url: "/{weaponType}/{weaponName}/",
      templateUrl: "partials/item.html",
      controller: 'item'
    })
    .state('type', {
      url: "/{weaponType}/",
      templateUrl: "partials/type.html",
      controller : 'type'
    });
  });
