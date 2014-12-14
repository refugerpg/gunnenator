module.exports = function() {

  var config = {};

      config.baseURL = "";
      config.engines =  [
        {"name" : "Refuge", "engine" : require('./core/refuge')}
      ];
      config.defaultEngine = 0;

  return config;

};
