import glob from 'glob'
import fs from 'fs'

console.log('\x1b[1m\x1b[36m%s\x1b[0m', "> Using html-single-line")
let summaryBefore = 0, summaryAfter = 0
glob(`./build/**/*.+(html)`, function (er, files) {
  files.forEach((path, i) => {
    const sizeBefore = fs.statSync(path).size / 1024
    let file = fs.readFileSync(path, { encoding: 'utf-8' })
    file = file.replaceAll(/(?:\r\n|\r|\n)/g, '')
    file = file.replaceAll(/(\s{2,}|\t)/g, ' ')
    fs.writeFileSync(path, file, { encoding: 'utf-8' })
    const sizeAfter = fs.statSync(path).size / 1024
    summaryBefore += sizeBefore
    summaryAfter += sizeAfter
    // const percentage = parseInt(100 - sizeAfter / sizeBefore * 100)
    // console.log(`${sizeBefore.toFixed(1)} kb => ${sizeAfter.toFixed(1)} kb || ${percentage} %`, path)
  })
  const percentage = parseInt(100 - summaryAfter / summaryBefore * 100)
  console.log('\x1b[32m%s\x1b[0m', `  ✔ done : ${summaryBefore.toFixed(1)} kb => ${summaryAfter.toFixed(1)} kb || ${percentage} %`)
})