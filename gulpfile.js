var gulp = require('gulp'),
  browserify = require('browserify'),
  uglify = require('gulp-uglify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer');
  minifyCSS = require('gulp-minify-css');

gulp.copy = function(src,dest) {
  return gulp.src(src, {base:"."})
    .pipe(gulp.dest(dest));
};

/*
 * gulp js
 * This task builds the development avita.js file.
 */

gulp.task('css', function() {
  console.log('Copying css to css...');
  gulp.src('./src/css/*.css').pipe(minifyCSS({keepBreaks:true})).pipe(gulp.dest('dist/css/'));
});

gulp.task('partials', function() {
  console.log('Copying partials to dist...');
  gulp.src('./src/partials/*.html').pipe(gulp.dest('dist/partials/'));
  gulp.src('./src/index.html').pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
  console.log('Building the gunnerator...');
  return browserify('./src/js/main.js')
    .bundle()
    .pipe(source('./app.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('serve', function() {
  var statik = require('statik');
  statik({
    port: 3000,
    root: __dirname + "/dist/"
  });
});

gulp.task('json', function() {
  console.log("Creating json data files...");
  var fs = require('fs');
  var guns = require('./src/js/json/guns.js');
  var ammo = require('./src/js/json/ammo.js');
  var docs = require('./src/js/json/docs.js');
  json = {
    "ammo" : ammo(),
    "weapons" : guns()
  };
  fs.writeFile('src/json/data.json',JSON.stringify(json));
  fs.writeFile('src/json/docs.json',JSON.stringify(docs()));
  console.log("Copying to dist...");
  gulp.src('./src/json/*.json').pipe(gulp.dest('dist/json/'));
});

/*
 * gulp dist
 * This task collates and minifies js and runs sass.
 */

gulp.task('dist', ['json','partials','css'], function() {
  gulp.src('./src/img/**/*', {base: './src/img'})
    .pipe(gulp.dest('./dist/img/'));
  console.log('Building and minifying the gunnerator');
  return browserify('./src/js/main.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify({mangle:false}))
    .pipe(gulp.dest('dist/'));
});
