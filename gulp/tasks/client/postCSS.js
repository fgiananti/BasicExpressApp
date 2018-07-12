const gulp = require('gulp');
const postcss = require('gulp-postcss');
const imports = require('postcss-import');
const postcssExtend = require('postcss-extend-rule');
const mixins = require('postcss-mixins');
const conditionals = require('postcss-conditionals');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const hexrgba = require('postcss-hexrgba');
const autoprefixer = require('autoprefixer');

gulp.task('postCSS', () => {
  return gulp
    .src('./client/src/styles/styles.css')
    .pipe(postcss([imports, postcssExtend, mixins, conditionals, cssvars, nested, hexrgba, autoprefixer]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./client/src/temp/styles'));
});
