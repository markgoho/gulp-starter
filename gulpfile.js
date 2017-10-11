const gulp = require('gulp');
const composer = require('gulp-uglify/composer');
const uglifyjs = require('uglify-es');
const pump = require('pump');
const browserSync = require('browser-sync').create();

const uglify = composer(uglifyjs, console);

gulp.task('hello', function() {
  console.log('Hello everyone!');
});

// More typical gulp task
gulp.task('task-name', function() {
  return gulp
    .src('source/files')
    .pipe(gulpPlugin())
    .pipe(gulp.dest('destination/folder'));
});

// Globs

// *.js
// * is a wildcard that matches any pattern in the current directory

// **/*.js
// **/ is a wildcard that matches directories, in this case
// this will match an js files from the root directory and down

// !not-this-file.js
// ! tells gulp to exclude that pattern from matched files

// *.+(js/ts)
// The plus + and parentheses () allow gulp to match multiple patterns
// with different ones separated by the pipe | character. In this
// example, gulp matches any file neding with .js or .ts in the root folder.

// Compress our JS using gulp-uglify and uglify-es (and pump)
gulp.task('compress', function(cb) {
  pump([gulp.src('src/js/*.js'), uglify(), gulp.dest('dist/js')], cb);
});

// Watch files, run tasks, put inside a task
gulp.watch('files/to/watch', ['tasks', 'to', 'run']);

gulp.task('watch-js', function() {
  gulp.watch('src/js/*.js', ['compress']);
});

// BrowserSync!!!!!!!!
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  });
});
