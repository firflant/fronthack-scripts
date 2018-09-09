'use strict'

const { getInstalledPath } = require('get-installed-path')
const fs = require('fs-extra')
const ncp = require('ncp').ncp


/**
 * Injects development html, scripts and assets to the development build of
 * React app. This function exists to be used as a "yarn poststart" script.
 */
const currentPath = process.cwd();
console.log(command);
console.log(currentPath);
// ncp(`${currentPath}/node_modules/fronthack-scripts/dev-assets`, `${currentPath}/dist/dev-assets`, function (err) {
//   if (err) throw err
//   fs.readFile(`${currentPath}/dist/index.html`, 'utf8', (err, content) => {
//     if (err) throw err
//     const newContent = content.replace('</body>', '<script type="text/javascript" src="./dev-scripts/fronthack-dev.js"></script>\n</body>')
//     fs.writeFile(`${currentPath}/dist/index.html`, newContent, (err) => {
//       if (err) throw err
//       console.log('Loaded Fronthack development scripts')
//     })
//   })
// })