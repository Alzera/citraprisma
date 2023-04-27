import fs from "fs";
import { glob } from 'glob';

const langs = ['id','en']
const folder = 'src/routes/'
const resultFile = 'src/lib/translations/loaders.ts'

console.log('\x1b[1m\x1b[36m%s\x1b[0m', "> Using build-translation-loaders")
glob(`${folder}**/*.+(svelte)`).then((files) => {
  let loaders = ""
  files.map(i => i.replaceAll(folder, '').replaceAll('.svelte', '').replaceAll(/@\S*/g, '')).forEach(function (i) {
    let normalizeI = i.replaceAll('+page', '').replaceAll(/\(\S+\)\//g, '')
    if(normalizeI.endsWith('/')) normalizeI = normalizeI.substring(0, normalizeI.length - 1);
    let
      key = normalizeI.replaceAll('/', '.').replaceAll('+', ''),
      routes = '/' + normalizeI.replaceAll('+layout', '')
    if(key.endsWith('layout'))
      routes = routes.substring(0, routes.length - 1)
    else if(!routes.endsWith('/')) routes = routes + "', '" + routes + "/"
    if(routes != '') routes = `routes: ['${routes}'], `
    for(const l of langs){
      const json = `${i}_${l}.json`
      // console.log(key, routes, json)
      if(fs.existsSync(folder + json)){
        loaders += `{ locale: '${l}', key: '${key}', ${routes}loader: async () => (await import('../../routes/${json}')).default, }, \r\n`
      }
    }
  })
  loaders = `export default [\r\n${loaders}]`
  fs.writeFileSync(resultFile, loaders);
  console.log('\x1b[32m%s\x1b[0m', `  ✔ done file created on ${resultFile}`)
})