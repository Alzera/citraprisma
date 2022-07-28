import 'dotenv/config'

import path from "path";
import cloudinary from "cloudinary";
import glob from "glob";

const assetsFolder = 'assets/images';

var count = 0;
glob(`./${assetsFolder}/**/*.+(jpg|jpeg|png)`, function (er, files) {
  files.forEach(function (file) {
    const folder = path.relative(assetsFolder, path.dirname(file));
    const normalized = folder.replace(/\\/g, "/")
    cloudinary.v2.uploader.upload(file, {
      folder: normalized,
      use_filename: true,
      unique_filename: false,
      overwrite: false,
      invalidate: true,
    }).then(_ => {
      count++;
      console.log(count + "/" + files.length + " " + file)
    }).catch(err => {
      console.log(file, err)
    })
  })
})