module.exports = function() {
    $.gulp.task('scripts', function() {
        return $.gulp.src(['src/static/js/main.js'])
            .pipe($.fi({
                prefix: '@',
                basepath: '@root'
            }))
            .pipe($.gulp.dest('build/js/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
};