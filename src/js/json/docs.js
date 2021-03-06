module.exports = function() {
  return [
    {
      "name" : "data.ammo",
      "prefix" : "data.ammo",
      "values" : [
        { "name" : "meplat",
          "description" : "The meplat is the flat or open tip on the nose of a bullet.",
          "type" : "number",
          "unit" : "mm"
        },
        { "name" : "bulletMass",
          "description" : "The mass of the bullet.",
          "type" : "number",
          "unit" : "g"
        },
        { "name" : "chargeMass",
          "description" : "The mass of the powder charge.",
          "type" : "number",
          "unit" : "g"
        },
        { "name" : "bulletDiameter",
          "description" : "Diameter of the bullet.",
          "type" : "number",
          "unit" : "mm"
        },
        { "name" : "bulletVelocity",
          "description" : "Velocity of average specimen under average firing conditions and fallback for weapons without available velocity data.",
          "type" : "number",
          "unit" : "m/s"
        },
        {
          "name" : "multiplier",
          "description" : "Number of projectiles with the round. Used to calculate shotgun damage.",
          "type" : "number",
          "unit" : "n/a"
        }
      ]
    },
    {
      "name" : "data.weapon",
      "prefix" : "data.weapon",
      "values" : [
        { "name" : "name",
          "description" : "The name of the weapon.",
          "type" : "string"
        },
        { "name" :"cartridge",
          "description" : "Cartridge fired by the weapon. This should be a key in the ammunition dictionary in data.json.",
          "type" : "key"
        },
        { "name" : "velocity",
          "description" : "Muzzle velocity — speed of the bullet as it exits the barrel. This is used to calculate damage and spread (via recoil relocity). If unknown, will default to the velocity of the ammunition fired.",
          "type" : "int",
          "unit" : "m/s"
        },
        { "name" :"weightMin",
           "description" : "Unloaded weight of the weapon. Averaged with weightMax to find a single value for weight-related calculations. If unavailable, a single weight value can be entered in 'weight,' in which case that would be used.",
           "type" : "float",
           "unit" : "kg"
        },
        { "name" :  "weightMax",
            "description" : "Weight of weapon with fully-loaded magazine. Averaged with weightMin to find a single value for weight-related calculations. If unavailable, a single weight value can be entered in 'weight,' in which case that would be used.",
            "type" : "float",
            "unit" : "kg"
        },
        { "name" : "weight",
          "description" : "Weight of weapon: a fallback if unloaded/loaded weights are unavailable. This value is given as-is to the calculator and is not manipulated.",
          "type" : "float",
          "unit" : "kg"
        },
        {
          "name" : "length",
          "description" : "Length of the weapon. If the weapon has a stock, used the folded length.",
          "type" : "float",
          "unit" : "mm",
        },
        {
          "name" : "sr",
          "description" : "Sight radius of the weapon, i.e., the distance between rear sight and foresight. This is used to calculate maximum potential accuracy.",
          "type" : "int",
          "unit" : "mm"
        },
        {
          "name" : "rof",
          "description" : "The weapon's cyclic rate of fire — one minute divided by the time it takes to cycle one round. For semiautomatic, lever-action, pump-action or bolt-action weapons, this should be the theoretical maximum number of times the weapon can be fired in one minute, assuming ammunition is not a factor.",
          "type" : "int",
          "unit" : "rpm"
        },
        {
          "name" : "cap",
          "description" : "Capcity of the weapon's magazine, either internal or a typical external magazine.",
          "type" : "int",
          "unit" : "rounds"
        },
        {
          "name" : "wiki",
          "description" : "Name of Wikipedia article.",
          "type" : "string"
        },
        {
          "name" : "img",
          "description" : "Name and filetype of image (e.g., 'm14.jpg').",
          "type" : "string"
        },
        {
          "name" : "country",
          "description" : "Two-letter country code for country of production.",
          "type" : "string"
        },
        {
          "name" : "year",
          "description" : "Year of first production.",
          "type" : "number"
        }
      ]
    },
    {
      "name" : "request",
      "prefix" : "request",
      "description" : "This is a request made of core to return data in the response format. Composed of the following properties.",
      "type" : "Object",
      "values" : [
        {
          "name" : "data",
          "description" : "The data received in the $http request of data.json should be filtered for the desired types of weapons and passed as the data of the request. This is not very robust at the moment and will change in future versions.",
          "type" : "Object"
        },
        {
          "name" : "format",
          "description" : "The amount of data included in the response for each item. For detailed calculations on a small number of objects, use 'long'. This will invoke the selected engine's filter for long data sets, creating the correctly formatted data for individual pages. For less detailed calculations on more objects, such as for a table, 'short' may offer preferable performance. Defaults to 'short' for performance reasons.",
          "type" : "string"
        },
        {
          "name" : "statistics",
          "description" : "Whether or not additional statistics comparing and contrasting weapons in the selection should be made. These will be returned in response.statistics.",
          "type" : "boolean"
        },
        {
          "name" : "similar",
          "description" : "This has two properties, 'type' and 'index' -- a key into the weapons dictionary and the index of an item in that key-value-pair's weapons array. This object can be omitted from the request.",
          "type" : "Object"
        }
      ]
    },
    {
      "name" : "response",
      "prefix" : "response",
      "description" : "The response to a request made of core. Returned as an object with the following properties.",
      "type" : "Object",
      "values" : [
        {
          "name" : "data",
          "description" : "An array of processed objects.",
          "type" : "array"
        },
        {
          "name" : "similar",
          "description" : "An array of short objects, each with a 'similar' property with a percentage similarity to the object passed in with the request.",
          "type" : "array"
        },
        {
          "name" : "statistics",
          "description" : "An array of objects, returned upon request in request.statistics.",
          "type" : "array"
        },
        {
          "name" : "columns",
          "description" : "An array of <a href='http://ui-grid.info/docs/#/api/ui.grid.class:GridOptions.columnDef'>UI Grid's columnDefs.</a>",
          "type" : "Array"
        }
      ]
    },
    {
      "name" : "reponse.data.weapon",
      "prefix" : "weapon",
      "description" : "",
      "values" : [
        {
          "name" : "accuracy",
          "description" : "base and maximum accuracy rounded, joined on a slash",
          "type" : "string",
          "shortStats" : "true",
          "longStats" : "true"
        },
        {
          "name" : "accuracyAvg",
          "formula" : "(accuracyMax + accuracyBase) / 2",
          "description" : "The average accuracy of the weapon.",
          'type' : 'float',
          "shortStats" : "false",
          "longStats" : "true"
        },
        {
          "name" : "accuracyBase",
          "formula" : "ln(weight + 1) &times; -3",
          "description" : "The base (unaimed, hip-fired, etc.) accuracy for a weapon. The heavier a weapon is, the lower its base accuracy. This decrease in base accuracy alongside an increase in weight is slowed by taking the natural log of its weight + 1 (the later number to prevent negatives arising from sub-1 kg weapons).",
          "shortStats" : "false",
          "longStats" : "true"
        },
        {
          "name" : "accuracyDamageRatio",
          "description" : "A derived metric.",
          "formula" : "accuracyAverage / glf",
          "type" : "float",
          "shortStats" : "false",
          "longStats" : "true"
        },
        {
          "name" : "accuracyMax",
          "formula" : "(1.25 * sr<sup>0.30</sup>) + (weight / 5) - 5",
          "description" : "The maximum aimed accuracy bonus of the weapon. This is calculated with the sight radius, and increases somewhat as the weight of the weapon increases.",
          "shortStats" : "false",
          "longStats" : "true"
        },
        {
          "name" : "capacity",
          "description" : "Capcity of the weapon's magazine, either internal or a typical external magazine.",
          "type" : "int",
          "unit" : "rounds"
        },
        {
          "name" : "cartridge",
          "description" : "The weapon's cartridge. This simply returns the string passed in along with the weapon.",
          "type" : "string",
          "shortStats" : "true",
          "longStats" : "true"
        },
        {
          "name" : "country",
          "description" : "The nation of production, represented by an img src of a flag.",
          "type" : "string",
        },
        {
          "name" : "damage",
          "formula" : "log<sub>2</sub>(gf &times; piercingFactor) / 100",
          "description" : "The Gates factor ((bulletMass<sup>1.5</sup> / bulletDiameter<sup>2</sup>) &times; velocity) multplied by the piercing factor, log'd and divided by a hundred to scale it for games.",
          "type" : "float",
          "shortStats" : "true",
          "longStats" : "true"
        },
        {
          "name" : "damageAvg",
          "description" : "Given the dice roll, the number represented in an average roll.",
          "type" : "float",
          "shortStats" : "false",
          "longStats" : "true"
        },
        {
          "name" : "damageDice",
          "description" : "A dice representation of the raw damage number, such that an average roll is as close as possible to that number.",
          "type" : "string",
          "shortStats" : "true",
          "longStats" : "true"
        },
        {
          "name" : "damageMax",
          "description" : "Given the dice roll, the number represented in a maximal roll.",
          "type" : "int",
          "shortStats" : "false",
          "longStats" : "true"
        },
        {
          "name" : "damageMin",
          "description" : "Given the dice roll, the number represented in a minimal roll.",
          "type" : "int",
          "shortStats" : "false",
          "longStats" : "true"
        },
        {
          "name" : "damageSpreadRatio",
          "description" : "A ratio of spread to damage. Lower is better.",
          "type" : "float",
          "shortStats" : "false",
          "longStats" : "true"
        },
        {
          "name" : "description",
          "description" : "A description of the weapon. Can contain HTML, which will be escaped using ng-sanitize.",
          "type" : "string",
          "shortStats" : "false",
          "longStats" : "true"
        },
        {
          "name" : "dpt",
          "description" : "Average damage per turn, assuming a 100% hit rate.",
          "type" : "float",
          "shortStats" : "false",
          "longStats" : "true"
        },
        {
          "name" : "draw",
          "formula" : "weight + (length / 500)",
          "description" : "The time it takes to draw the weapon. Rounded, minimum 2 (approximately one second).",
          "type" : "int",
          "shortStats" : "true",
          "longStats" : "true"
        },
        {
          "name" : "href",
          "description" : "The URL for the weapon.",
          "type" : "string",
          "shortStats" : "true",
          "longStats" : "true"
        },
        {
          "name" : "img",
          "description" : "Filename for image. The path will be calculated to img/(weaponType)/(filename).  ",
          "type" : "string"
        },
        {
          "name" : "melee",
          "formula" : "(draw &times; 0.75)",
          "description" : "The time it takes to make a melee attack with the weapon. Rounded, minimum two (approximately one second).",
          "type" : "int",
          "shortStats" : "true",
          "longStats" : "true"
        },
        {
          "name" : "meleeDamageAvg",
          "description" : "Given the dice roll, the number represented in an average roll.",
          "type" : "float",
          "shortStats" : "false",
          "longStats" : "true"
        },
        {
          "name" : "meleeDamageMax",
          "description" : "Given the dice roll, the number represented in an maximal roll.",
          "type" : "float",
          "shortStats" : "false",
          "longStats" : "true"
        },
        {
          "name" : "meleeDamageMin",
          "description" : "Given the dice roll, the number represented in an minimal roll.",
          "type" : "float",
          "shortStats" : "false",
          "longStats" : "true"
        },
        {
          "name" : "meleeDamageRaw",
          "formula" : "ln(weight &times; 100)",
          "description" : "Raw value for melee damage.",
          "type" : "float",
          "shortStats" : "false",
          "longStats" : "true"
        },
        {
          "name" : "name",
          "description" : "The name of the weapon, taken from the appropriate item in data.json.",
          "type" : "string",
          "shortStats" : "true",
          "longStats" : "true"
        },
        {
          "name" : "piercing",
          "formula" : "ln(velocity<sup>1.25</sup> &times; bulletMass &times; (bulletDiameter / meplat))",
          "description" : "An imaginary factor I invented to bias the calculations toward high velocity, pointy bullets. Fixed at two past the decimal point.",
          "type" : "int",
          "shortStats" : "true",
          "longStats" : "true"
        },
        {
          "name" : "rateOfFire",
          "formula" : "rateOfFireRaw / 120",
          "description" : "Divides the cyclic rate of fire (or maximum fire rate, for non-automatic weapons) into action points. Rounded up.",
          "type" : "int",
          "shortStats" : "true",
          "longStats" : "true"
        },
        {
          "name" : "rateOfFireRaw",
          "formula" : "weapon.rof",
          "description" : "The cyclic rate of fire (or maximum fire rate, for non-automatic weapons).",
          "type" : "int",
          "shortStats" : "true",
          "longStats" : "false"
        },
        {
          "name" : "similarity",
          "description" : "If requested, the similarity to the object passed into core for comparison represented as a percentage",
          "type" : "int",
          "shortStats" : "true",
          "longStats" : "false"
        },
        {
          "name" : "type",
          "description" : "The type of the weapon (shotgun, pistol, &c.). Taken from the parent dictionary item.",
          "type" : "string",
          "shortStats" : "true",
          "longStats" : "true"
        },
        {
          "name" : "velocity",
          "description" : "The weapon's muzzle velocity. If the weapon's velocity is present, that is returned. Otherwise, use the cartridge's (not accounting for barrel length, and therefore less accurate) velocity.",
          "type": "int",
          "unit" : "m/s",
          "shortStats" : "false",
          "longStats" : "true"
        },
        {
          "name" : "type",
          "description" : "The type of the weapon (shotgun, pistol, &c.). Taken from the parent dictionary item.",
          "type" : "string",
          "shortStats" : "true",
          "longStats" : "true"
        },
        {
          "name" : "weaponLength",
          "description" : "The length of the weapon given in data.json, in cm.",
          "type" : "number",
          "shortStats" : "false",
          "longStats" : "true"
        },
        {
          "name" : "weaponSightRadius",
          "description" : "The sight radius of the weapon given in data.json, in cm.",
          "type" : "number",
          "shortStats" : "false",
          "longStats" : "true"
        },
        {
          "name" : "weight",
          "description" : "If provided with minimum and maximum weight values, this is an average of the two. Otherwise, this uses the weapon's weight value as a fallback.",
          "type" : "float",
          "unit" : "kg",
          "shortStats" : "true",
          "longStats" : "true"
        },
        {
          "name" : "wiki",
          "description" : "URL of Wikipedia article.",
          "type" : "string",
          "shortStats" : "false",
          "longStats" : "true"
        },
        /*{
          "name" : "recoilEnergy",
          "formula" : "(weight / 19.6) &times; ((bulletMass &times; velocity) + (1.5 &times; chargeMass &times; velocity)) / (weight &times; 1000))<sup>2</sup>",
          "description" : "The free recoil energy of the firearm on firing. The constant of 1.5 on the charge mass is halfway between the two extremes mentioned by Wikipedia for the multiplier of powder charge ejection velocity.",
          "type" : "float",
          "unit" : "kg-m",
          "shortStats" : "false",
          "longStats" : "false"
        },{
        "name" : "gf",
        "formula" : "(bulletMass<sup>1.5</sup> / bulletDiameter<sup>2</sup>) &times; velocity",
        "description" : "The Gates factor — a formula I found on a gun forum somewhere. I preferred it to the alternatives, the Taylor KO Factor (according to Wikipedia, favors favors large diameter, moderate velocity, heavy bullets), Thorniley stopping power (ibid, favors moderate diameter, moderate velocity, moderate mass bullets), etc.",
        "shortStats" : "false",
        "longStats" : "false"
      },*/
      ]
    }
  ];
};
