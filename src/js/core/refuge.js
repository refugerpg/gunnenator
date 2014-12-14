module.exports = function() {

  // this is everything specific to the Refuge implementation of the gunnerator.

  var filter = function() {
    return function(input, options) {
      var dict = {
        "info" : {
          "name" : input.name,
          "alias" : input.alias,
          "description" : input.description,
          "cartridge" : input.cartridge,
          "type" : input.type,
          "href" : input.href,
          "img" : input.img,
          "wiki" : input.wiki,
          "flag" : input.flag,
          "country" : input.nationality,
          "year" : input.year
        },
        "stats" : [
        {
          "name" : "Game Stats",
          "values" : [
          {"name" : "Draw AP", "value" : input.draw},
          {"name" : "Accuracy", "value" : input.accuracy},
          {"name" : "Melee AP", "value" : input.melee},
          {"name" : "Damage dice", "value" : input.damageDice},
          {"name" : "Melee damage", "value" : input.meleeDamage},
          {"name" : "Spread", "value" : input.spread},
          {"name" : "Rate of fire", "value" : input.rateOfFire},
          {"name" : "Capacity", "value" : input.capacity},
          ]
        },
        {
          "name" : "Damage",
          "values" : [
          {"name" : "Raw damage", "value" : input.damage},
          {"name" : "Damage roll (minimum)", "value" : input.damageMin},
          {"name" : "Damage roll (average)", "value" : input.damageAvg},
          {"name" : "Damage roll (maximum)", "value" : input.damageMax},
          {"name" : "Raw melee damage", "value" : input.meleeDamageRaw},
          ]
        },
        {
          "name" : "Statistics",
          "values" : [
          {"name" : "Accuracy (base)", "value" : input.accuracyBase},
          {"name" : "Accuracy (average)", "value" : input.accuracyAvg},
          {"name" : "Accuracy (maximum)", "value" : input.accuracyMax},
          {"name" : "Piercing", "value" : input.piercing},
          {"name" : "Damage-spread ratio", "value" : input.damageSpreadRatio},
          {"name" : "Accuracy-damage ratio", "value" : input.accuracyDamageRatio},
          {"name" : "Raw spread", "value" : input.spreadRaw},
          {"name" : "Rate of fire", "value" : input.rateOfFire},
          {"name" : "Capacity", "value" : input.capacity},
          ]
        },
        /*{
        "name" : "Range",
        "values" : [
        {"name" : "Velocity @ 0", "value" : input.range[0]},
        {"name" : "Velocity @ 100", "value" : input.range[1]},
        {"name" : "Velocity @ 200", "value" : input.range[2]},
        {"name" : "Velocity @ 300", "value" : input.range[3]},
        {"name" : "Velocity @ 400", "value" : input.range[4]},
        {"name" : "Velocity @ 500", "value" : input.range[5]},
        {"name" : "Velocity @ 600", "value" : input.range[6]},
        {"name" : "Velocity @ 700", "value" : input.range[7]},
        {"name" : "Velocity @ 800", "value" : input.range[8]},
        {"name" : "Velocity @ 900", "value" : input.range[9]},
        {"name" : "Velocity @ 1000", "value" : input.range[10]},
        ]
      },*/
      {
        "name" : "Specifications",
        "values" : [
        {"name" : "Weight", "value" : input.weight + " kg"},
        {"name" : "Length", "value" : input.weaponLength + " cm"},
        {"name" : "Sight radius", "value" : input.weaponSightRadius + " cm"},
        {"name" : "Muzzle velocity", "value" : input.velocity + " m/s"},
        {"name" : "Rate of fire", "value" : input.rateOfFireRaw + " rpm"},
        {"name" : "Capacity", "value" : input.capacity + " rounds"},
        ]
      },
      ]
    };
    return dict;
  };
};


  var columns = [
    { field: "name", cellClass: 'first', minWidth: 144, enableColumnMenu: false, cellTemplate: '<a ng-href="{{row.entity.href}}"><div class="ui-grid-cell-contents" ng-class="col.colIndex()"><span ng-cell-text>{{row.entity[col.field]}}</span></div></a>'},
    { field: 'cartridge', enableColumnMenu: false},
    { field: 'origin', enableColumnMenu: false, maxWidth: 56, cellTemplate: '<div class="ui-grid-cell-contents" ng-class="col.colIndex()"><span ng-cell-text><img ng-src="{{row.entity.flag}}"></img></span></div>'},
    { field: 'year', maxWidth: 48, enableColumnMenu: false},
    { field: 'draw' , maxWidth: 48, enableColumnMenu: false},
    { field: 'melee', displayName: "Melee", maxWidth:56, enableColumnMenu: false},
    { field: 'accuracy', enableColumnMenu: false},
    { field: "damageDice", displayName: "Dice", maxWidth:72, enableColumnMenu: false},
    { field: "damage", enableColumnMenu: false, maxWidth:72},
    { field: 'rateOfFire', displayName: "ROF" , maxWidth: 48, enableColumnMenu: false},
    { field: 'spread', enableColumnMenu: false,maxWidth: 72},
    { field: 'capacity', displayName: "Cap.", maxWidth: 48, enableColumnMenu: false},
    { field: 'weight', enableColumnMenu: false, maxWidth: 72},
  ];

  var velocityAtDistance =  function(distance, cartridge, muzzleVelocity) {

    var mv = muzzleVelocity;
    var k = cartridge.bc;
    var d = distance;

    var t = (Math.pow(Math.E, k*d) - 1) / (k*mv);
    var v = mv / (1 + (k*t*mv));
    return v;

  };

  var damage = function(dam) {
    var dice = {
      2.5 : "d4",
      3.5 : "d6",
      4.5 : "d8",
      5.5 : "d10",
      6.5 : "d12"
    };

    var remainder = [];
    var diceString = [];

    for (var key in dice) {
      remainder.push(dam % key);
      var number = Math.floor(dam/key);
      diceString.push( number + dice[key] );
    }
    var diceOut = diceString[remainder.indexOf(Math.min.apply(Math, remainder))];
    var min = parseInt(diceOut.split("d")[0]);
    var max = parseInt(diceOut.split("d")[1]) * min;
    var avg = parseFloat((min + max) / 2);
    return dam < 3.5 ? {dice: "1d4", raw: 2.5, min: 1, max: 4} : {dice: diceOut, avg: avg, min: min, max: max, raw:dam};
  };

  var calculate = function(weapon, cartridge, options) {

      if (cartridge === undefined) {
        console.log(weapon.name," cartridge is undefined.");
      }

      var out = {};
      var weight;

      if (weapon.weightMin && weapon.weightMax) {
        weight = (weapon.weightMin + weapon.weightMax) / 2;
      } else if (weapon.weightMin && cartridge.roundWeight && weapon.cap) {
        weight = weapon.weightMin + (cartridge.roundWeight * weapon.cap);
      } else {
        weight = weapon.weight;
      }

      var base = Math.log(weight + 1) * -3;
      var max = (Math.pow(weapon.sr, 0.35)) + (weight / 5) - 5;
      var velocity = weapon.velocity ? weapon.velocity : cartridge.bulletVelocity;
      var recoilEnergy = (weight / 19.6) * (Math.pow(((cartridge.bulletMass * velocity) + (1.5 * cartridge.chargeMass * velocity)) / (weight * 1000),2));
      //var pf = (cartridge.bulletMass * velocity) / ((meplat / cartridge.bulletDiameter) * 1000);
      var pf = Math.log(Math.pow(velocity,1.25) * cartridge.bulletMass * (cartridge.bulletDiameter / (cartridge.meplat)));
      var gf = cartridge.multiplier ? (Math.pow(cartridge.bulletMass, 1.5) / (cartridge.multiplier * cartridge.bulletDiameter) * velocity) : (Math.pow(cartridge.bulletMass, 1.5) / Math.pow(cartridge.bulletDiameter,2) * velocity);
      var glf = Math.pow((Math.log(gf * pf)/Math.log(2)),3)/100;

      var damageObject = damage(glf);
      var meleeDamage = damage(parseFloat(Math.log(weight * 100).toFixed(2)));
      var spread = Math.max(parseFloat((recoilEnergy + 3).toFixed(2)),1);

      out.description = weapon.description;
      out.href = weapon.href;
      out.name = weapon.name;
      out.draw = Math.max(Math.round(weight + (weapon.length/750)),2);
      out.melee = Math.max(Math.round(out.draw * 0.75),2);
      out.rateOfFire = Math.ceil(weapon.rof / 120);
      out.accuracy = Math.round(base) + "/" + ((max > 0) ? "+" + Math.round(max) : Math.round(max));
      out.spread = Math.round(spread);
      out.damageDice = damageObject.dice;
      out.damage = parseFloat(glf.toFixed(2));
      out.meleeDamage = damage(Math.log(weight * 100).toFixed(2)).dice;
      out.capacity = weapon.cap;
      out.weight = parseFloat(weight.toFixed(2));
      out.cartridge = weapon.cartridge;
      out.dpt = out.rof * damageObject.avg;
      out.type = options.typeLongName;
      out.piercing = parseFloat(pf.toFixed(2));
      out.img = weapon.img ? options.baseURL + "/img/" + options.typeShortName + "/" + weapon.img : undefined;
      out.flag = weapon.flag;
      out.country = weapon.country;
      out.nationality = weapon.nationality;
      out.year = weapon.year;

      if (options.format == "long") {
        out.alias = weapon.alias;
        out.accuracyBase = parseFloat(base.toFixed(2));
        out.accuracyMax = parseFloat(max.toFixed(2));
        out.accuracyAvg = parseFloat(((max + base) / 2).toFixed(2));
        out.rateOfFireRaw = weapon.rof;
        out.damageMin = damageObject.min;
        out.damageAvg = damageObject.avg;
        out.damageMax = damageObject.max;
        out.meleeDamageMin = meleeDamage.min;
        out.meleeDamageMax = meleeDamage.max;
        out.meleeDamageAvg = meleeDamage.avg;
        out.meleeDamageRaw = meleeDamage.raw;
        out.accuracyDamageRatio = parseFloat(((out.accuracyAvg / glf).toFixed(2)));
        out.damageSpreadRatio = parseFloat((glf / Math.round(recoilEnergy + 1)).toFixed(2));
        out.spreadRaw = spread;
        out.weaponLength = parseFloat((weapon.length / 10).toFixed(2));
        out.weaponSightRadius = parseFloat((weapon.sr / 10).toFixed(2));
        out.velocity = velocity;
        out.range = [];

        for (var i=0; i <= 1000; i = i + 100) {
          out.range.push(velocityAtDistance(i, cartridge, velocity));
        }

        if (weapon.wiki) {
          out.wiki = encodeURI("http://en.wikipedia.org/wiki/"+weapon.wiki).replace(" ", "%20");
        }
      }
      if (options.similar) {
        var comparisonArray = [weight, velocity, pf, spread, base, max, weapon.rof, weapon.length, weapon.sr, weapon.cap, glf];
        for (var a=0; a < comparisonArray.length; a++) {
          if (comparisonArray[a] === undefined) {
            console.log(weapon.name," parameter is undefined.");
          }
          comparisonArray[a] = parseFloat(comparisonArray[a].toFixed(2));
        }
        out.similar = comparisonArray;
      }
      return out;
  };

  return {
    "calculate": calculate,
    "columns" : columns,
    "filter" : filter,
  };
};
