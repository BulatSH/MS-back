module.exports = function() {
    $.gulp.task('img', function() {
        return $.gulp.src('src/static/img/**/*.{png,jpg,gif,svg}')
            .pipe($.gp.imagemin([
                $.imageminJpegRecompress({
                    method: 'smallfry'
                }),
                $.imageminOptipng()
            ], {
                verbose: true,
                progressive: true
            }, ))
            .pipe($.gulp.dest('build/img'))
    });
}