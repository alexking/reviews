var gulp = require("gulp");
var yaml = require("gulp-yaml-validate");

gulp.task("test", function() {
	gulp.src("reviews.yaml")
		.pipe(yaml());
});