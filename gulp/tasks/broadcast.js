const broadcast = () => {
   const { plugins, path } = app

   plugins.browserSync.init({
      server: {
         baseDir: `${path.build.html}`,
      },
      notify: false,
      port: 5500,
   })
}

export default broadcast
