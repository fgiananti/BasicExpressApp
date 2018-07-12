const gulp = require("gulp");
const watch = require("gulp-watch");

gulp.task("watch", () => {
  gulp.start("nodemon");

  watch(
    [
    "./client/src/styles/**/*.css",
    "./client/src/components/**/*.css"
    ],
    () => {
      gulp.start("postCSS");
    }
  );

  watch('./**/*.js', () => {
    gulp.start('lint');
  });

});
