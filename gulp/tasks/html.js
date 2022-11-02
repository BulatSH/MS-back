module.exports = function() {
    $.gulp.task('html', function() {
        return $.gulp.src('src/pages/*.html')
            .pipe($.fi({
                basepath: '@file'
            }))
            .pipe($.gulp.dest('build'))
            .on('end', $.bs.reload);
    });
}
