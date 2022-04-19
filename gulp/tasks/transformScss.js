import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'
import cleanCss from 'gulp-clean-css'
import webpCss from 'gulp-webpcss'
import autoPrefixer from 'gulp-autoprefixer'
import groupCssMQ from 'gulp-group-css-media-queries'

const sass = gulpSass(dartSass)

const transformScss = () => {
   const { gulp, path, plugins, isBuild, isDev } = app

   return gulp
      .src(path.src.scss, { sourcemaps: isDev })
      .pipe(
         plugins.plumber(
            plugins.notify.onError({
               title: 'SCSS',
               message: 'Error: <%= error.message %>',
            })
         )
      )
      .pipe(plugins.replace(/@img\//g, '../img/'))
      .pipe(
         sass({
            outputStyle: 'expanded',
         })
      )
      .pipe(plugins.if(isBuild, groupCssMQ()))
      .pipe(
         plugins.if(
            isBuild,
            webpCss({
               webpClass: '.webp',
               noWebpClass: '.no-webp',
            })
         )
      )
      .pipe(
         plugins.if(
            isBuild,
            autoPrefixer({
               grid: 'autoplace',
               cascade: true,
            })
         )
      )
      .pipe(gulp.dest(path.build.css))
      .pipe(plugins.if(isBuild, cleanCss()))
      .pipe(
         rename({
            extname: '.min.css',
         })
      )
      .pipe(gulp.dest(path.build.css))
      .pipe(plugins.browserSync.stream())
}

export default transformScss
