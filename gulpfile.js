var gulp = require("gulp");
var yamlToJson = require("gulp-yaml");
var prettify = require("gulp-jsbeautifier");
var lintYaml = require("gulp-yaml-validate");
var ghPages = require("gulp-gh-pages");
var shell = require("gulp-shell");

gulp.task("test", function() {
	gulp.src("source/reviews.yaml")
		.pipe(lintYaml());
});

gulp.task("json", function() {

	// Build
	gulp.src("source/reviews.yaml")
		.pipe(gulp.dest("dist"))
		.pipe(yamlToJson())
		.pipe(prettify())
		.pipe(gulp.dest("dist"));
});

gulp.task("default", ["json"]);
