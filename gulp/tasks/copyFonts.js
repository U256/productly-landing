const copyFonts = () => {
	const { gulp, path, plugins } = app

	return gulp.src(path.src.fonts)
		.pipe(plugins.plumber(
			plugins.notify.onError({
				title: 'Fonts',
				message: 'Error: <%= error.message %>',
			})
		))
		.pipe(gulp.dest(path.build.fonts))
}

export default copyFonts


// const writeFonts = (configPath) => {
// 	fs.writeFile(configPath, '', () => {})
//    let newFileOnly;

// 	fontFiles.forEach(fFile => {
// 		const fontFileName = fFile.split('.')[0]

//       if (newFileOnly !== fontFileName) {
//          let fontName = fontFileName.split('-')[0] || fontFileName
//          let fontWeight = (fontFileName.split('-')[1] || fontFileName).toLowerCase()

//          if (fontWeight === 'thin') {
//             fontWeight = 100
//          } else if (fontWeight === 'extralight') {
//             fontWeight = 200
//          } else if (fontWeight === 'light') {
//             fontWeight = 300
//          } else if (fontWeight === 'medium') {
//             fontWeight = 500
//          } else if (fontWeight === 'semibold') {
//             fontWeight = 600
//          } else if (fontWeight === 'bold') {
//             fontWeight = 700
//          } else if (fontWeight === 'extrabold' || fontWeight === 'heavy') {
//             fontWeight = 800
//          } else if (fontWeight === 'black') {
//             fontWeight = 800
//          } else {
//             fontWeight = 400
//          }

//          fs.appendFile(
//             configPath,
//             `@font-face {
// 						font-display: swap;
// 						font-family: ${fontName};
// 						src: url("../fonts/${fontFileName}.woff2") format("woff2"),	url("../fonts/${fontFileName}.woff") format("woff");
// 						font-weight: ${fontWeight};
// 						font-style: normal;
// 					}\r\n`,
//             {}
//          )
//          newFileOnly = fontFileName
//       }
// 	})
// }

// const transformFonts = () => {
// 	const { path, plugins, gulp } = app
// 	const fontsScssConfig = `${path.srcFolder}/scss/fonts.scss` // fontsFile	

// 	console.log(path.build.fonts);
	

// 	fs.readdir(path.build.fonts, (err, fontFiles) => {
// 		const isScssConfigExists = fs.existsSync(fontsScssConfig)		

// 		if (isScssConfigExists) console.warn('Remove fonts.scss if you want to refresh fonts.')

// 		if (fontFiles && !isScssConfigExists) writeFonts(fontsScssConfig)
// 	})

// 	return gulp
// 		.src(`${path.srcFolder}/fonts/**/*.*`)
// 		.pipe(plugins.plumber(
// 			plugins.notify.onError({
// 				title: "Fonts",
// 				message: "Error: <%= error.message %>"
// 			})
// 		))
// 		.pipe(gulp.dest(path.build.fonts))
// }

// export default transformFonts
