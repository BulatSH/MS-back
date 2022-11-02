'use strict';

/* Plugins
********************
gulp-load-plugins
gulp-sass
gulp-csso
gulp-cheerio
gulp-notify
gulp-autoprefixer
gulp-sourcemaps
gulp-browserSync
gulp-concat
gulp-file-include
gulp-imagemin
- imagemin-jpegtran
- imagemin-optipng
gulp.spritesmith + merge-stream

*/

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    path: {
        tasks: require('./gulp/config/tasks.js')
    },
    fi: require('gulp-file-include'),
    imageminJpegtran: require('imagemin-jpegtran'),
    imageminOptipng:  require('imagemin-optipng'),
    imageminJpegRecompress: require('imagemin-jpeg-recompress'),
    ms: require('merge-stream')
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default',$.gulp.series(
    $.gulp.parallel('sprite'),
    $.gulp.parallel('html', 'sass', 'scripts', 'img', 'fonts'),
    $.gulp.parallel('watch','serve')
));

$.gulp.task('build',$.gulp.series(
    $.gulp.parallel('sprite'),
    $.gulp.parallel('html', 'sass', 'scripts', 'img', 'fonts')
));
