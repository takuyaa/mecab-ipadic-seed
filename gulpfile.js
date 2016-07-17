"use strict";

const del = require('del');
const gulp = require('gulp');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');
const decompress = require('gulp-decompress');
const decompressTarxz = require('decompress-tarxz');

gulp.task('clean', (done) => {
    return del([ 'lib' ], done);
});

gulp.task('decompress', () => {
    return gulp.src('dict/mecab-ipadic-2.7.0-20070801.tar.xz')
        .pipe(decompress({ strip: 1, plugins: [ decompressTarxz() ] }))
        .pipe(gulp.dest('lib/dict/'));
});

gulp.task('build-js', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('lib/'));
});

gulp.task('build', gulp.series('clean', gulp.parallel('decompress', 'build-js')));

gulp.task('test-js', () => {
    return gulp.src('test/**/*.js', { read: false })
        .pipe(mocha());
});

gulp.task('test', gulp.series('build', 'test-js'));

gulp.task('watch', () => {
    gulp.watch([ 'src/**/*.js', 'test/**/*.js' ], gulp.series('test'));
});
