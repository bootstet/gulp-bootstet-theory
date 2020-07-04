// gulp 核心文件操作api
const { src, dest } = require('gulp')
const cleanCss = require('gulp-clean-css')
const rename = require('gulp-rename')


// src 创建读取流 dest 写入流
exports.default = () => { 
  src('src/*.css')  // * 表示文件目下所有css文件
    .pipe(cleanCss()) // 转换流压缩css文件
    .pipe(rename({ extname: '.min.css' }))  // extname 重命名的扩展名
    .pipe(dest('dist'))
}