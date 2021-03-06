const fs = require('fs')
const { Transform } = require('stream')

exports.default = () => {
  // 文件读取流
  const read = fs.createReadStream('nomalllize.css')
  // 文件写入流
  const write = fs.createWriteStream('nomalllize.min.css')
  // 文件转换流
  const transform = new Transform({
    transform: (chunk, encoding, callback) => {
      // 核心转换过程实现
      // chunk => 读取流中读取到的内容(Buffer)
      const input = chunk.toString()
      const output = input.replace(/\s+/g, '').replace(/\/\*.+?\*\//g,'')
      callback(null, output)
    }
  })

  // 把读取出来的文件流导入写入文件流
  read
  .pipe(transform)
  .pipe(write)
  return read  
}