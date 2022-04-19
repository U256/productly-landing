const copyFiles = () => {
	const { gulp, path } = app

	return gulp.src(path.src.files)
		.pipe(gulp.dest(path.build.files))
}

export default copyFiles
