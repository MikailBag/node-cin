"use strict";

const gulp = require("gulp");
const cp = require("child_process");
let del;
//const path = require("path");

//process.env.PATH += (path.delimiter+__dirname+"/node_modules/.bin/");
gulp.task("build:install", function (cb) {//prod
    cp.exec(`${__dirname}/node_modules/.bin/node-gyp install`, function (err, stdout, stderr) {
        cb(err);
    })
});

gulp.task("build:configure", function (cb) {//prod
    cp.exec(`${__dirname}/node_modules/.bin/node-gyp configure`, function (err, stdout, stderr) {
        cb(err);
    })
});

gulp.task("build:build", function (cb) {//prod
    cp.exec(`${__dirname}/node_modules/.bin/node-gyp build`, function (err, stdout, stderr) {
        cb(err);
    })
});

gulp.task("build:clean", function () {//dev
    del = require("del");
    return del("./build");
});

gulp.task("build",gulp.series("build:install","build:configure","build:build"));
