/// <binding AfterBuild='moveToLibs, moveIndex' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

var paths = {
   indexSource: "./app/",
   indexTarget: "./wwwroot/",
   npmSrc: "./node_modules/",
   libTarget: "./wwwroot/libs/"
};

var appFilesToMove = [
   paths.indexSource + 'index.html'
];

var libsToMove = [
   paths.npmSrc + '/angular2/bundles/angular2-polyfills.js',
   paths.npmSrc + '/systemjs/dist/system.js',
   paths.npmSrc + '/systemjs/dist/system-polyfills.js',
   paths.npmSrc + '/rxjs/bundles/Rx.js',
   paths.npmSrc + '/angular2/bundles/angular2.dev.js',
   paths.npmSrc + '/es6-shim/es6-shim.min.js'
];
gulp.task('moveToLibs', function () {
   return gulp.src(libsToMove).pipe(gulp.dest(paths.libTarget));
});

gulp.task('moveIndex', function () {
   return gulp.src(appFilesToMove).pipe(gulp.dest(paths.indexTarget));
});