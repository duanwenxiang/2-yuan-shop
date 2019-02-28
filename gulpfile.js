var gulp = require("gulp"),
uglify = require("gulp-uglify"),//压缩js
sass = require("gulp-sass"),//将sass转为css
concat = require("gulp-concat"),//合并文件
rename = require("gulp-rename"),//改名
cssmin = require("gulp-cssmin"),//压缩css
imgmin = require("gulp-imagemin"),//压缩图片
babel = require('gulp-babel');//解析es6

gulp.task("compressCss",function(){
    return gulp.src("index/source/css/index.scss")
            .pipe(sass())
            .pipe(cssmin())
            .pipe(concat("index.min.css"))
            .pipe(gulp.dest("index/dist/css"))
})
gulp.task("compressJs",function(){
    return gulp.src("index/source/js/index.js")
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(uglify())
            .pipe(concat("index.min.js"))
            .pipe(gulp.dest("index/dist/js"))
})
gulp.task("compressImg",function(){
    return gulp.src("index/source/img/*")
            .pipe(imgmin())
            .pipe(gulp.dest("index/dist/img"))
})
gulp.task("monitor",function(){
    gulp.watch("index/source/css/index.scss",["compressCss"]);
    gulp.watch("index/source/js/index.js",["compressJs"]);
    gulp.watch("index/source/img/*",["compressImg"]);
})