import glob from 'glob'
import fs from 'fs'

console.log('\x1b[1m\x1b[36m%s\x1b[0m', "> Using replace-cloudinary-links")
glob(`./build/**/*.+(html)`, function (er, files) {
  files.forEach((path, i) => {
    let file = fs.readFileSync(path, { encoding: 'utf-8' })
    file = file.replaceAll('https://res.cloudinary.com/citraprisma/image/upload/f_auto,q_auto:low,e_blur:5,', '/img/')
    fs.writeFileSync(path, file, { encoding: 'utf-8' })
  })
  console.log('\x1b[32m%s\x1b[0m', `  ✔ done`)
})