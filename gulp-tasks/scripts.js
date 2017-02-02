module.exports = function (gulp, plugins, options) {
    options = options || {};
    return function () {
        return gulp.src(options.src)
            .pipe(plugins.babel({
                presets: ['es2015']
            }))
            .dest(options.dest)
    }
}