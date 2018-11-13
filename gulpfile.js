"use strict";

//引入gulp
var gulp = require('gulp');

var browsersync = require('browser-sync').create();

gulp.task('browsersync', function() {
    browsersync.init({
    	server: "./dist"
        //proxy: "192.168.20.93"
    });
});

//监听js/less变化
gulp.task('default',function () {

    gulp.run(['browsersync']);
});





