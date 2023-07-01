/*!
 * laydate build
 */

const pkg = require('./package.json');

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify-css');
const rename = require('gulp-rename');
const header = require('gulp-header');
const del = require('del');

// 发行版本目录
const releaseDir = `./release/zip/layDate-v${pkg.version}`;
const release = `${releaseDir}/laydate`;

const task = {
  laydate: function() {
    gulp.src('./src/**/*.css')
      .pipe(minify({
        compatibility: 'ie7'
      }))
      .pipe(gulp.dest('./dist'));
    
    return gulp.src('./src/laydate.js')
      .pipe(uglify({
        output: {
          ascii_only: true // escape Unicode characters in strings and regexps
        }
      }))
      .pipe(header('/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.description %> | <%= pkg.license %> Licensed */\n ;', { pkg: pkg }))
      .pipe(gulp.dest('./dist'));
  },
  other: function() {
    return gulp.src('./src/**/font/*')
      .pipe(rename({}))
      .pipe(gulp.dest('./dist'));
  }
};

gulp.task('clear', function(cb) {
  return del(['./dist/*'], cb);
});

gulp.task('laydate', task.laydate); // 压缩 PC 版本
gulp.task('other', task.other); // 移动一些配件

// 打包发行版
gulp.task('clearZip', function(cb) {
  return del([`./release/zip/layDate-v${pkg.version}`], cb);
});

gulp.task('r', gulp.series('clearZip', function() {
  gulp.src('./release/doc/**/*')
    .pipe(gulp.dest(releaseDir));
  
  return gulp.src('./dist/**/*')
    .pipe(gulp.dest(`${releaseDir}/laydate`));
}));

// 拷贝 README.md 和 package.json 到 dist 文件夹
gulp.task('copyFiles', function() {
  return gulp.src(['README.md', 'package.json'])
    .pipe(gulp.dest('dist'));
});

// 全部
gulp.task('default', gulp.series('clear', gulp.parallel('laydate', 'other'), 'copyFiles')); // 压缩 CSS 和移动配件

