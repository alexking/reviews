var gulp = require("gulp");
var yamlToJson = require("gulp-yaml");
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
		.pipe(gulp.dest("site/public/api"))
		.pipe(yamlToJson())
		.pipe(gulp.dest("site/public/api"));

});

gulp.task("ghpages", ["build"], function() {

	gulp.src("site/dist/**/*")
		.pipe(ghPages({
			message: "Update [timestamp] [skip ci]"
		}));
});

gulp.task("build", shell.task([
	"ember build --environment='production'"
], {
	cwd: "site"
}));

gulp.task("deploy", ["ghpages"]);


gulp.task("default", ["json"]);
