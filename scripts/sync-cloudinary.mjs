import 'dotenv/config'

import path from "path";
import cloudinary from "cloudinary";
import { glob } from 'glob';

const assetsFolder = 'assets/images';
const batchCount = 5

var count = 0;
glob(`./${assetsFolder}/**/*.+(jpg|jpeg|png)`).then(async files => {
  for (let i = 0; i < files.length;) {
    let promises = [];
    
    for (let j = 0; j < batchCount && i < files.length; i++,j++) {
        let file = files[i];

        const folder = path.relative(assetsFolder, path.dirname(file));
        const normalized = folder.replace(/\\/g, "/")
        
        promises.push(cloudinary.v2.uploader.upload(file, {
          folder: normalized,
          use_filename: true,
          unique_filename: false,
          overwrite: false,
          invalidate: true,
        }).then(_ => {
          count++;
          console.log('\x1b[32m%s\x1b[0m', count + "/" + files.length + " " + file)
        }).catch(err => {
          console.log('\x1b[31m%s\x1b[0m', file + " " + err)
        }))
    }
    
    await Promise.all(promises);
  }
})