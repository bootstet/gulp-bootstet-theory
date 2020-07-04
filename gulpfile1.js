// gulp的入口文件
// gulp 的基本使用 并行和串行

exports.foo = done => {
  console.log('foo task working~~')

  done()  // 表示任务完成
}

exports.default = done => {
  console.log('default task working~~')
  done()
}

// gulp 4.0以前借用gulp模块 的task模块来实现
//  gulp 4.0 以后保留了次api （此方式不被推荐）
const gulp = require('gulp')
const { series, parallel } = require('gulp')

gulp.task('bar', done => {
  console.log('bar working~')
  done()
})

// gulp 组合任务

const task1 = done => {
  setTimeout(() => {
    console.log('task1 working~~')
    done()
  }, 1000);
}

const task2 = done => {
  setTimeout(() => {
    console.log('task2 working~~')
    done()
  }, 1000);
}

const task3 = done => {
  setTimeout(() => {
    console.log('task3 working~~')
    done()
  }, 1000);
}

// 一次执行参数里的方法 串行
exports.fooSeries = series(task1, task2, task3)

// 创建并行的结构
exports.barPar = parallel(task1, task2, task3)

