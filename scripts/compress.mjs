import fs from "fs";
import glob from "glob";
import zlib from "zlib";

console.log('\x1b[1m\x1b[36m%s\x1b[0m', "> Using compress")
let summary = 0, brSummary = 0, gzSummary = 0
glob('./build/**/*.+(json|js|css|html|xml)', function (er, files) {
  files.forEach(function (file) {
    const sizeBefore = fs.statSync(file).size
    const data = fs.readFileSync(file)
    // brotli
    const brotliData = zlib.brotliCompressSync(data, {
      params: {
        [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT,
        [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        [zlib.constants.BROTLI_PARAM_SIZE_HINT]: sizeBefore
      }
    })
    fs.writeFileSync(file + '.br', brotliData);
    const brSize = fs.statSync(file + '.br').size / 1024
    // gzip    
    const gzipData = zlib.gzipSync(data);
    fs.writeFileSync(`${file}.gz`, gzipData);
    const gzSize = fs.statSync(file + '.gz').size / 1024

    const sizeInMb = (sizeBefore / 1024)
    summary += sizeInMb
    brSummary += brSize
    gzSummary += gzSize
    // const brPercentage = parseInt(brSize / sizeInMb * 100)
    // const gzPercentage = parseInt(gzSize / sizeInMb * 100)

    // console.log(`ori ${sizeInMb.toFixed(1)} kb || gz ${gzSize.toFixed(1)} kb - ${gzPercentage} % || br ${brSize.toFixed(1)} kb - ${brPercentage} %`, file)
  })
  const brPercentage = parseInt(brSummary / summary * 100)
  const gzPercentage = parseInt(gzSummary / summary * 100)
  console.log('\x1b[32m%s\x1b[0m', `  ✔ done : ori ${summary.toFixed(1)} kb || gz ${gzSummary.toFixed(1)} kb - ${gzPercentage} % || br ${brSummary.toFixed(1)} kb - ${brPercentage} %`)
})