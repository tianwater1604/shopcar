const gulp = require('gulp');//引入的就是gulp的本地代码（模块）

gulp.task("watchall",async function(){
    //watch函数就是监听的
    gulp.watch(["*.html","*.php"],async function(){
        gulp.src(["*.html","*.php"])
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\shopcar"));
    });

    //压缩js
    gulp.watch("js/*.js",async ()=>{
        gulp.src("js/*.js")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\shopcar\\js"));
    });

});

