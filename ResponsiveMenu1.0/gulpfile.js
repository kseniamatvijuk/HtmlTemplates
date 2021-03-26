var gulp = require('gulp');
var sass = require('gulp-sass');
const del = require('del');
concat = require('gulp-concat');


sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('style/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('style/css/'));
});

gulp.task('clean', () => {
    return del([
        'style/**/*.css',
    ]);
});
gulp.task('concat', function() {
    return gulp.src('style/css/*.css')
       .pipe(concat('style.css'))
       .pipe(gulp.dest('style/'));
});

gulp.task('default', gulp.series(['clean', 'sass','concat']));


gulp.task('watch', function () {
    gulp.watch('style/**/*.scss', gulp.parallel('default')); 
  });
