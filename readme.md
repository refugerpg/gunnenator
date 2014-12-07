#The Gunnenator

Version 0.1.0

The Gunnenator is a small Angular app that converts raw weapon specifications to statistics for the Refuge Role-Playing Game. This is obviously of limited utility for people not playing the Refuge Role-Playing Game, i.e. everyone, usually including myself, so I wrote it with the ability to use custom conversions.

So if your favorite RPG system doesn't have an extensive list of firearms and you want an extensive list of firearms—and really, who doesn't want an extensive list of firearms—, you can go ahead and write up a conversion file and have access to statistics for over 250 small arms (with another ~300 in progress), custom-tailored to your game of choice.

Gee willickers, you might ask, who do I have to kill to get that working for *my* RPG? No one, I'd reply. Simply whip up a conversion file and you'll be well on your way.

Disclaimer: you're probably going to have to know Javascript, but most of the difficult stuff is abstracted out of the way.

## Installation and development

Download it, cd into the directory and type `npm install.`

If you haven't installed gulp already, do it, it'll save your life: `npm install -g gulp.`

Once everything is installed, you'll be able to start developing.

Here are most of the gulp commands you'll find helpful when building.

`gulp partials`: copies the partials from the src directory to dist.  
`gulp js`: bundles, but does not minify, the js. Useful for incremental builds.  
`gulp serve`: serves the gunnenator. Note that you'll need to serve it before you can use it, because of the limitations of file:///.  
`gulp json`: compiles the loose js/json mismash files into their respective json files and tosses them over into dist.  
`gulp dist`: runs partials, json and bundles/uglifies the js 

## Creating a conversion file

A conversion file contains three items.

**Calculate (function)**: the calculation function takes three inputs -- the weapon's raw statistics (along with the its href, country, nationality (think 'German,' 'American', etc.) and flag image), taken from the data.json file, the cartridge it fires and its raw statistics from data.json, as well as several other pieces of data.

**Columns (array of objects)**: in the index.js file, columns takes an input of each output object from calculate(). For each desired field in the table, create an object in the array, based on the settings detailed [here](http://ui-grid.info/docs/#/api/ui.grid.class:GridOptions.columnDef).

**Filter (function)**: If this looks weird (I think it does), it's because I just did what the Angular docs told me to do. At any rate, return an object of objects, each object corresponding to an accordion container, and each key-value pair within the container corresponding to a weapon attribute.

A short outline of a conversion file is below:

```
module.exports = function() {
  
  var calculate = function(weapon, cartridge, options) {
    var out = {};
    out.name = weapon.name;
    out.value = weapon.value;
    ...
    return out;
  };
  
  var columns = [
    { field: "name" }
    { field: "value" }
    ...
  ];
  
  var filter = function() {
    return function(input, options) {
      var dict = {
        "info" : {
        	"name" : input.name
          ...
        },
        "section" : {
        	"name: "Section",
        	"values" : [
        		{name: "Value", "value" : input.value}
        	]
        }
      };
      return dict;
    };
  };
  
  return {
    "calculate": calculate,
    "columns" : columns,
    "filter" : filter
  };
  
};

```

## Integration with the Gunnenator

Now that you've hypothetically created a conversion file, the time has come to add your new RPG system to the Gunnenator. If I coded it correctly, all you need to do is add one line to main.js, right by where you see `var engines = []` on line 7. Just add your new conversion file there, for instance, `{name: "d20", "engine" : require('./core/d20)}` and bam, you're good to go.

## Deployment

So, now you have a Gunnenator of your very own. All you have to do to get it into a deployable state is edit the 'baseURL' variable in main.js to the appropriate URL. This will allow the app to appropriately write the ng-hrefs and ng-srcs to their correct targets -- otherwise, the /#/ in the URL will confuse the living daylights out of it / me.