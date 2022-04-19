import webpackStream from 'webpack-stream'

const transformJS = () => {
   const { gulp, path, plugins, isDev } = app

   return gulp
      .src(path.src.js, { sourcemaps: isDev })
      .pipe(
         plugins.plumber(
            plugins.notify.onError({
               title: 'JS',
               message: 'Error: <%= error.message %>',
            })
         )
      )
      .pipe(
         webpackStream({
            mode: isDev ? 'development' : 'production',
            output: {
               filename: 'app.min.js',
            },
         })
      )
      .pipe(gulp.dest(path.build.js))
      .pipe(plugins.browserSync.stream())
}

export default transformJS
