module.exports = function($rootScope, $scope, $stateParams, config, core, $http, $filter) {

  $scope.baseURL = config.baseURL;

  $http.get('json/data.json').success(function(data) {

    $rootScope.$on('switchEngine', function(e) {
      $scope.generateItem();
    });

    $scope.weapons = data.weapons;
    $scope.ammo = data.ammo;

    var type;
    var name = decodeURI($stateParams.weaponName.replace("%2F","/").replace("%26",""));

    for (var i=0; i < $scope.weapons.length; i++) {
        if ($stateParams.weaponType == $scope.weapons[i].shortname) {
          type = i;
        }
    }

    var gunType = $scope.weapons[type].weapons;
    var weapon;
    var index;

    for (i=0; i < gunType.length; i++) {
      if (gunType[i].name == name) {
        weapon = gunType[i];
        index = i;
      }
    }

    $scope.generateItem = function() {
      var request = {};
          request.data = {};
          request.data.ammo = $scope.ammo;
          request.data.weapons = {};
          request.data.weapons = data.weapons[type];
          request.format = 'long';
          request.similar = {
            "checkSimilar" : true,
            "type" : $scope.weapons[type].shortname,
            "index" : index
          };
          request.similarLength = 5;

      var response = core.get(request);
      $scope.similar = response.similar;

      if (response.data[0].variants) {
        $scope.variants = [];
        $scope.variants.push($filter(config.engine + "ItemFilter")(response.data[0]));
        for (var k=0; k < response.data[0].variants.length; k++) {
          $scope.variants.push($filter(config.engine + "ItemFilter")(response.data[0].variants[k]));
        }

        $scope.selectedDefault = $scope.variants[0];
        $scope.selected = $scope.variants[0];

        // $scope.variants.sort(
        //   function compare(a,b) {
        //     if (a.info.alias < b.info.alias) {
        //       return -1;
        //     }
        //     if (a.info.alias > b.info.alias) {
        //       return 1;
        //     } else {
        //       return 0;
        //     }
        //   }
        // );
      } else {
        $scope.selected = $filter(config.engine + "ItemFilter")(response.data[0]);
      }
    };

    $scope.generateItem();

  });

  $scope.selectVariant = function(index) {
    $scope.selected = $scope.variants[index];
  };
};
