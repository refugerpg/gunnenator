#The Gunnenator

semver 0.1.0

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

## Adding new weapons

If you'd like, you can add new weapons and ammunition types to the Gunnenator.

`{name: "Colt M1911", cartridge: ".45 ACP", rof: 35, velocity: 252, cap: 7, weightMin: 1.049, weightMax: 1.271, length: 219, sr: 165, cost: 400, country: "us", year: 1911},`

`'.45 ACP' : {bulletDiameter: 11.5, bulletMass: 15, bulletVelocity: 250, chargeMass: 0.399, meplat: 2.75, bc: 0.195 },`

It's probably overkill for most game systems, but I ask if you make a PR with more guns, you keep it working with the default—i.e., Refuge's—converter.

## Creating a conversion file

A conversion file contains three items.

**Calculate (function)**: the calculation function takes three inputs -- the weapon's raw statistics (along with the its href, country, nationality (think 'German,' 'American', etc.) and flag image), taken from the data.json file, the cartridge it fires and its raw statistics from data.json, as well as several other pieces of data.

**Columns (array of objects)**: in the index.js file, columns takes an input of each output object from calculate(). For each desired field in the table, create an object in the array, based on the settings detailed [here](http://ui-grid.info/docs/#/api/ui.grid.class:GridOptions.columnDef).

**Filter (function)**: If this looks weird (I think it does), it's because I just did what the Angular docs told me to do. At any rate, return an object of objects, each object corresponding to an accordion container, and each key-value pair within the container corresponding to a weapon attribute. The first 'info' section displays information about the weapon as part of the page structure, you're probably best of copying it directly from the Refuge file.

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

## Documentation

It's a mess right now. I'm working on it. :)

## Contributions

I'm not really a great programmer, so I invite people to make contributions to any part of the Gunnenator. But since this is a personal project for the Refuge RPG, I'd ask that the current functionality of the Refuge converter be maintained. So if you make a huge change in the core of the calculator, I'd really appreciate if you'd bring the Refuge converter up to speed. Thanks!

Please feel free to contribute additional converters for your / other systems! This would've been like 40% easier if that hadn't been part of the design goals.

As for coding preferences, if JSLint is down, I'm down.