import fs from "fs";
import glob from "glob";

const langs = ['id','en']
const folder = './src/routes/'
const resultFile = './src/lib/translations/loaders.ts'
const underscoreRegex = /(\/?_\S*$)/g

console.log('\x1b[1m\x1b[36m%s\x1b[0m', "> Using build-translation-loaders")
glob(`${folder}**/*.+(svelte)`, function (er, files) {
  let loaders = ""
  files.map(i => i.replaceAll(folder, '').replaceAll('.svelte', '')).forEach(function (i) {
    let
      key = i.replaceAll('/', '.'),
      routes = '/' + i.replaceAll('index', '')
    if(routes != '/' && routes.endsWith('/'))
      routes = routes.substring(0, routes.length - 1)
    if(underscoreRegex.test(routes)) routes = ''
    if(routes != '') routes = `routes: ['${routes}'], `
    for(const l of langs){
      const json = `./${l}/${i}.json`;
      loaders += `{ locale: '${l}', key: '${key}', ${routes}loader: async () => (await import('${json}')).default, },`
    }
  })
  loaders = `export default [${loaders}]`
  fs.writeFileSync(resultFile, loaders);
  console.log('\x1b[32m%s\x1b[0m', `  ✔ done file created on ${resultFile}`)
})