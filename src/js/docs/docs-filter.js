module.exports = function() {
  return function(input, options) {
    var prefix = options.prefix;
    var values = [];
    var output;
    for (var i=0; i<input.length; i++) {
      if (input[i].prefix == prefix) {
        values = input[i].values;
        if (options.item) {
          for (var k=0; k < values.length; k++) {
            if (values[k].name == options.item) {
              output = values[k];
            }
          }
        } else {
          output = input[i];
        }
      }
    }
    return output;
  };
};
