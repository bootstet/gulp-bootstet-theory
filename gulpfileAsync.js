const fs = require('fs')
// gulp 异步zhixing
exports.callback = done => {
  console.log('callback task~~')
  done()
}

exports.callback_error = done => {
  console.log('callback task~~')
  done(new Error('task failes!'))
}

exports.promise = () => {
  console.log('promise task~~')
  return Promise.resolve()
}

exports.promise_error = () => {
  console.log('promise task~~')
  return Promise.reject(new Error('task failed~'))
}

const timeout = time => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

// promise的语法糖 gulp支持的异步处理的方式 
exports.async = async () => {
  await timeout(1000)
  console.log('async task~')
}

// gulp中stream 处理文件方式
exports.stream  = done => {
  // 读取文件流
  const readStream = fs.createReadStream('package.json')
  // 写入文件流
  const writeStream = fs.createWriteStream('temp.txt')
  // 把readStream注入到writeSteam中
  readStream.pipe(writeStream) // 文件复制的作用 结束的时机end时机
  // 复制文件结束的过程中监听end事件，在end的时候处理 done()函数
  readStream.on('end', () => {
    done()
  })
  return readStream
}

