var gulp = require('gulp'),
    sass = require('gulp-sass'),
    useref = require('gulp-useref'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    svgSprite = require('gulp-svg-sprite'),
    runSequence = require('run-sequence');

gulp.task('sass', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulp.dest('res/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('scss/**/*.scss', ['sass']);
});
gulp.task('useref', function(){
    return gulp.src('res/*.html')
        .pipe(useref())
        .pipe(gulp.dest('res'))
});
gulp.task('pref', function () {
    return gulp.src('res/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['ie >= 9, last 3 versions, > 2%'],
            cascade: false
        }))
        .pipe(gulp.dest('res/css'));
});
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'res'
        }
    })
});
gulp.task('default', function (callback) {
    runSequence(['sass', 'useref', 'watch'],
        callback
    )
});
gulp.task('sprite', function() {
    config = {
        shape: {
            dimension: {
                maxWidth: 120,
                maxHeight: 100
            },
            spacing: {
                padding: 8
            },
            dest: 'intermediate'
        },
        mode: {
            view: {
                bust: false,
                render: {
                    scss: true
                }
            }
        }
    };
    gulp.src('**/*.svg', {cwd: 'scss/img'})
        .pipe(svgSprite(config))
        .pipe(gulp.dest('res/img'));
});
