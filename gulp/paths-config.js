var path = require('path'),
    root = path.resolve('./'),
    src = path.join(root, 'src'),
    dist = path.join(root, 'server/public'),
    build = path.join(root, 'build'),
    styles = path.join(src, 'styles/**/*.scss'),
    jadeTpls = path.join(src, 'layout/**/*.jade'),
    jadeIndex = path.join(src, 'index.jade');

module.exports = {

    dist: {
        dir: dist,
        styles: path.join(dist, '/styles')
    },
    build: {
        dir: build,
        styles: path.join(build, '/styles'),
        tpls: build
    },
    styles: styles,
    jade: {
        tpls: [jadeTpls,
            path.join('!', src, '/layout/base/*.jade'),
            path.join('!', src, '/layout/components/components-scripts-test/*.jade')
        ],
        index: jadeIndex
    },
    watch: {
        build: [styles, jadeTpls, jadeIndex]
    },

    browserSync: {
        baseDir: build
    }
};
