import webp from 'gulp-webp'
import imagemin from 'gulp-imagemin'

const transformImg = () => {
	const { gulp, path, plugins, isBuild } = app

	return gulp
      .src(path.src.img)
      .pipe(
			plugins.plumber(
				plugins.notify.onError({
				title: 'Img',
				message: 'Error: <%= error.message %>',
			}))
		)
      .pipe(plugins.newer(path.build.img))
		.pipe(plugins.if(isBuild, webp()))
		.pipe(plugins.if(isBuild, gulp.dest(path.build.img)))
		.pipe(plugins.if(isBuild, gulp.src(path.src.img)))
		.pipe(plugins.if(isBuild, plugins.newer(path.build.img)))
		.pipe(plugins.if(
			isBuild, 
			imagemin({
				progressive: true,
				svgoPlugins: [{ removeViewBox: false }],
				interlaced: true,
				optimizationLevel: 3,
			})
		))
      .pipe(gulp.dest(path.build.img))
      // просто перемещаем svg в папку изображений
		.pipe(gulp.src(path.src.svg)) 
      .pipe(gulp.dest(path.build.img))
		///
      .pipe(plugins.browserSync.stream())
}

export default transformImg
