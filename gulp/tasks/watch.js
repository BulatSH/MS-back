module.exports = function() {
    $.gulp.task('watch', function() {
        $.gulp.watch('src/**/*.html', $.gulp.series('html'));
        $.gulp.watch('src/static/css/**/*.scss', $.gulp.series('sass'));
        $.gulp.watch('src/static/js/*.js', $.gulp.series('scripts'));
        $.gulp.watch('src/static/img/*', $.gulp.series('img'));
        $.gulp.watch('src/static/fonts/*', $.gulp.series('fonts'));
        $.gulp.watch('src/static/ico/*', $.gulp.series('sprite'));
    });
}