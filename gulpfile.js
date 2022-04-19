import gulp from 'gulp'
import plugins from './gulp/config/plugins.js'
import pathList from './gulp/config/path.js'
import copyFiles from './gulp/tasks/copyFiles.js'
import reset from './gulp/tasks/reset.js'
import broadcast from './gulp/tasks/broadcast.js'
import transformHTML from './gulp/tasks/transformHTML.js'
import transformScss from './gulp/tasks/transformScss.js'
import transformJS from './gulp/tasks/transformJS.js'
import transformImg from './gulp/tasks/transformImg.js'
import copyFonts from './gulp/tasks/copyFonts.js'
import makeSprites from './gulp/tasks/generateSvgSprites.js'

global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: pathList, 
	gulp,
	plugins 
}

const { watch, series, parallel, task } = gulp

function watchChanges() {
   watch(pathList.watch.files, copyFiles);
   watch(pathList.watch.html, transformHTML)
   watch(pathList.watch.scss, transformScss)
   watch(pathList.watch.js, transformJS)
   watch(pathList.watch.img, transformImg)
}

const mainTasks = series(
	copyFonts,
	parallel(
		copyFiles,
		transformHTML,
		transformScss,
		transformJS,
		transformImg,
	)
)
const dev = series(reset, mainTasks, parallel(watchChanges, broadcast))
const build = series(reset, mainTasks)
task('default', dev)

export { makeSprites, dev, build }
