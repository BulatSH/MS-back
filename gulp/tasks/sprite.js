module.exports = function() {
	$.gulp.task('sprite', function() {
		let spriteData = $.gulp.src('src/static/ico/*.{png,jpg,gif,svg}')
			.pipe($.gp.spritesmith({
				imgName: 'sprite.png',
				cssName: '_sprites.scss',
				algorithm: 'binary-tree',
				cssFormat: 'scss',
				cssTemplate: 'src/static/css/plugins/sprite/scss.template.mustache',
				padding: 10
			}));

		let imgStream = spriteData.img
			.pipe($.gulp.dest('src/static/img/'));

		let cssStream = spriteData.css
			.pipe($.gulp.dest('src/static/css/plugins/sprite/'));

		return $.ms(imgStream, cssStream);
	});
}