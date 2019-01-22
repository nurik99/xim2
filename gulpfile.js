const { src, dest, parallel } = require('gulp');
var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	csso = require('gulp-csso'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer-core');
	del = require('del');

function css1() {
  return src([
		'./style/vendor/*.css'
	])
	.pipe(postcss([autoprefixer({browsers:['last 2 version']})]))
	.pipe(csso())
	.pipe(concat('./vendor.min.css'))
	.pipe(gulp.dest('build/css'))
}
function css2() {
  return src([
		'./style/components/lang.css',
		'./style/components/newLang.css',
		'./style/components/preloader.css'
	])
	.pipe(postcss([autoprefixer({browsers:['last 2 version']})]))
	.pipe(csso())
	.pipe(concat('./preloader_lang.min.css'))
	.pipe(gulp.dest('build/css'))
}
function css3() {
  return src([
		'./style/components/about/*.css'
	])
	.pipe(postcss([autoprefixer({browsers:['last 2 version']})]))
	.pipe(csso())
	.pipe(concat('./about.min.css'))
	.pipe(gulp.dest('build/css'))
}
function css4() {
  return src([
		'./style/components/press/*.css'
	])
	.pipe(postcss([autoprefixer({browsers:['last 2 version']})]))
	.pipe(csso())
	.pipe(concat('./press.min.css'))
	.pipe(gulp.dest('build/css'))
}
function css5() {
  return src([
		'./style/components/contact/*.css'
	])
	.pipe(postcss([autoprefixer({browsers:['last 2 version']})]))
	.pipe(csso())
	.pipe(concat('./contact.min.css'))
	.pipe(gulp.dest('build/css'))
}
function css6() {
  return src([
		'./style/components/services/*.css'
	])
	.pipe(postcss([autoprefixer({browsers:['last 2 version']})]))
	.pipe(csso())
	.pipe(concat('./services.min.css'))
	.pipe(gulp.dest('build/css'))
}
function js() {
  return src([
		'./js/*.js'
	])
    .pipe(concat('./main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
}
// function js() {
//   return src([
// 		'./js/*.js'
// 	])
//     .pipe(concat('./main.min.js'))
//     .pipe(uglify({mangle: true}))
//     .pipe(gulp.dest('build/js'))
// }

exports.css1 = css1;
exports.css2 = css2;
exports.css3 = css3;
exports.css4 = css4;
exports.css5 = css5;
exports.css6 = css6;
exports.js = js;
exports.default = parallel(css1, css2, css3, css4, css5, css6, js);
