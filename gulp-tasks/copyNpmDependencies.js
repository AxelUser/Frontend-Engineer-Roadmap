'use strict'

const paths = [
    './node_modules/vue/dist/vue.min.js'
];

module.exports = function (gulp, plugins, options) {
    return function (callback) {
        let stream = gulp.src(paths)
            .pipe(gulp.dest(options.dest));
        return stream;
    }
}