'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var neat = require('node-neat').includePaths;
var bourbon = require('node-bourbon').includePaths;

gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass({includePaths:['style'].concat(bourbon).concat(neat)}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});
