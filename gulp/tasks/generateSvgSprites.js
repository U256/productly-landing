import svgSprite from 'gulp-svg-sprite'

const generateSvgSprites = () => {
	const { gulp, plugins, path } = app

	return gulp
      .src(path.src.svg, {})
      .pipe(plugins.plumber(
			plugins.notify.onError({
				title: 'SVG',
				message: 'Error: <%= error.message %>',
			})
		))
      .pipe(svgSprite({
			mode: {
				stack: '../icons/icons.svg',
				example: true
			}
		}))
		.pipe(gulp.dest(path.build.img))
}

export default generateSvgSprites
