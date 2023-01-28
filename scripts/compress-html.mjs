import glob from 'glob'
import fs from 'fs'
import { execSync } from "child_process";
import { minify } from 'html-minifier-terser';

const minification_options = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  conservativeCollapse: true,
  decodeEntities: true,
  html5: true,
  minifyCSS: true,
  minifyJS: true,
  minifyURLs: true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  // sortAttributes: true,
  // sortClassName: true
};
console.log('\x1b[1m\x1b[36m%s\x1b[0m', "> Using html-single-line")
let summaryBefore = 0, summaryAfter = 0, finishCount = 0, filesCount = 0
glob(`./build/**/*.+(html)`, function (er, files) {
  filesCount = files.length
  files.forEach(async (path, i) => {
    const sizeBefore = fs.statSync(path).size / 1024

    let file = fs.readFileSync(path, { encoding: 'utf-8' })
    file = await minify(file, minification_options)
    fs.writeFileSync(path, file, { encoding: 'utf-8' })

    const sizeAfter = fs.statSync(path).size / 1024
    summaryBefore += sizeBefore
    summaryAfter += sizeAfter
    
    finishCount++
    finish()
  })
})
function finish(){
  if(finishCount < filesCount) return;
  const percentage = parseInt(100 - summaryAfter / summaryBefore * 100)
  console.log('\x1b[32m%s\x1b[0m', `  ✔ done : ${summaryBefore.toFixed(1)} kb => ${summaryAfter.toFixed(1)} kb || ${percentage} %`)
}