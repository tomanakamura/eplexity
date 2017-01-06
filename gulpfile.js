"use strict";

var pngquant = require('imagemin-pngquant');
var del = require('del');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var runSequence = require('run-sequence');

var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');
var changed = require('gulp-changed');
var concat = require('gulp-concat');
var fileinclude = require('gulp-file-include');
var imagemin = require('gulp-imagemin');
var inject = require('gulp-inject');
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var plumberErrorNotify = {
	errorHandler: notify.onError("Error: <%= error.message %>")
};

//start default or specific tasks
gulp.task('clean', function (cb) {
	return del(['dist', 'dev'], cb);
});
//end default or specific tasks

//start only deploy tasks
gulp.task('copy_vendor_js', function () {
	return gulp.src([
			'src/js/vendor/!(jquery)*.js',
			'src/js/vendor/*.js',
			'src/js/vendor/(jquery)*.js'
		])
		.pipe(plumber(plumberErrorNotify))
		.pipe(gulp.dest('dist/js/vendor'))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('html', ['copy_vendor_js'], function () {
	return gulp.src(['src/*.html'])
		.pipe(plumber(plumberErrorNotify))
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(inject(
			gulp.src([
				'dist/js/vendor/jquery.js',
				'dist/js/vendor/*.js'
			], {
				read: false
			}), {
				addRootSlash: false,
				transform: function (filePath, file, i, length) {
					return '<script src="' + filePath.replace('dist/', '') + '"></script>';
				}
			}))
		.pipe(gulp.dest('dist'))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('copy_fonts', function () {
	return gulp.src([
			'src/fonts/**/*'
		])
		.pipe(plumber(plumberErrorNotify))
		.pipe(gulp.dest('dist/fonts'))
		.pipe(reload({
			stream: true
		}));
});


gulp.task('styles', function () {
	return gulp.src([
			'src/scss/styles.scss'
		])
		.pipe(plumber(plumberErrorNotify))
		.pipe(sass({
			// outputStyle: 'compressed'
		}))
		.pipe(concat('styles.css'))
		.pipe(prefix({
			browsers: ['ie 9', 'opera 12', 'ff 15', 'chrome 25', 'last 2 version']
		}))
		.pipe(gulp.dest('dist/css'))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('images', function () {
  return gulp.src([
    'src/images/**/*'
  ])
    .pipe(plumber(plumberErrorNotify))
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      pngquant(),
      imagemin.svgo({plugins: [
        {removeViewBox: false},
        {removeTitle: true},
        {removeDesc: true},
        {removeComments: true}
      ]})
    ]))
    .pipe(gulp.dest('dist/images'))
    .pipe(reload({
      stream: true
    }))
});

gulp.task('scripts', function () {
	return gulp.src([
			'!src/js/vendor/*.js',
			'src/js/**/!(main)*.js',
			'src/js/main.js'
		])
		.pipe(plumber(plumberErrorNotify))
		.pipe(gulp.dest('dist/js'))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('default', ['clean'], function (cb) {
	runSequence(
		[
			'styles',
			'scripts',
			'copy_fonts',
			'html',
			'copy_vendor_js'
		],
		'images', /*images optimization can be with delay, must wait*/
		cb
	);
});
//end only deploy tasks

//start only dev tasks
gulp.task('copy_vendor_js-dev', function () {
	return gulp.src([
			'src/js/vendor/!(jquery)*.js',
			'src/js/vendor/*.js',
			'src/js/vendor/(jquery)*.js'
		])
		.pipe(plumber(plumberErrorNotify))
		.pipe(changed('dev/js/vendor'))
		.pipe(gulp.dest('dev/js/vendor'))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('html-dev', ['copy_vendor_js-dev'], function () {
	return gulp.src(['src/*.html'])
		.pipe(plumber(plumberErrorNotify))
		.pipe(changed('dev/*.html'))
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(inject(
			gulp.src([
				'dev/js/vendor/jquery.js',
				'dev/js/vendor/*.js'
			], {
				read: false
			}), {
				addRootSlash: false,
				transform: function (filePath, file, i, length) {
					return '<script src="' + filePath.replace('dev/', '') + '"></script>';
				}
			}))
		.pipe(gulp.dest('dev'))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('copy_fonts-dev', function () {
	return gulp.src([
			'src/fonts/**/*'
		])
		.pipe(plumber(plumberErrorNotify))
		.pipe(changed('dev/fonts'))
		.pipe(gulp.dest('dev/fonts'))
		.pipe(reload({
			stream: true
		}));
});



gulp.task('styles-dev', function () {
	return gulp.src([
			'src/scss/styles.scss'
		])
		.pipe(plumber(plumberErrorNotify))
		.pipe(changed('dev/css'))
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(prefix({
			browsers: ['ie 9', 'opera 12', 'ff 15', 'chrome 25', 'last 2 version']
		}))
		.pipe(sourcemaps.write())
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('dev/css'))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('images-dev', function () {
	return gulp.src([
			'src/images/**/*'
		])
		.pipe(plumber(plumberErrorNotify))
		.pipe(changed('dev/images'))
		.pipe(gulp.dest('dev/images'))
		.pipe(reload({
			stream: true
		}))
});

gulp.task('scripts-dev', function () {
	return gulp.src([
			'!src/js/vendor/*.js',
			'src/js/**/!(main)*.js',
			'src/js/main.js'
		])
		.pipe(plumber(plumberErrorNotify))
		.pipe(gulp.dest('dev/js'))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('dev', ['clean'], function (cb) {
	runSequence(
		[
			'styles-dev',
			'scripts-dev',
			'copy_fonts-dev',
			'html-dev',
			'copy_vendor_js-dev'
		],
		'images-dev', /*images optimization can be with delay, must wait*/
		cb
	);
});

gulp.task('serve', ['dev'], function () {
	browserSync({
		tunnel: false,
		//tunnel: "qubprojectstarter",
		https: false,
		notify: false,
		port: 8080,
		server: {
			baseDir: ['dev']
		}
	});

	gulp.watch(['src/js/vendor/*.js'], ['copy_vendor_js-dev']);
	gulp.watch(['src/scss/**/*'], ['styles-dev']);
	gulp.watch(['src/images/**/*'], ['images-dev']);
	gulp.watch(['src/fonts/**/*'], ['copy_fonts-dev']);
	gulp.watch(['src/js/**/*'], ['scripts-dev']);
	gulp.watch(['src/*.html', 'src/partials/*.html'], ['html-dev']);
});
//end only dev tasks
