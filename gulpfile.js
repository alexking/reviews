var gulp = require("gulp");
var yamlToJson = require("gulp-yaml");
var lintYaml = require("gulp-yaml-validate");


gulp.task("test", function() {
	gulp.src("source/reviews.yaml")
		.pipe(lintYaml());
});

gulp.task("json", function() {

	// Build
	gulp.src("source/reviews.yaml")
		.pipe(gulp.dest("dest"))
		.pipe(yamlToJson())
		.pipe(gulp.dest("dest"))
		.pipe(gulp.dest("site/public"));

});


gulp.task("default", ["json"]);

