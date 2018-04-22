let gulp          = require('gulp')
    sass          = require('gulp-sass')
    sourcemaps    = require('gulp-sourcemaps')
    autoprefixer  = require('gulp-autoprefixer')
    bs            = require('browser-sync').create()

let folder = {
    src: 'src/',
    build: 'build/'
}

let path = {
    html: {
        src: '**/*.html'
    },
    sass: {
        src: 'sass/**/*.scss',
        build: 'css',
        dist: 'css'
    },
    js: {
        src: 'js/**/*.js',
        build: 'js',
        dist: 'js'
    }
}

let autoprefixerOptions = {
    browsers: ['last 2 versions']
}

gulp.task( 'sass', () => {
    return gulp.src(folder.src + path.sass.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(folder.build + path.sass.build));
})

gulp.task( 'serve', () => {
    bs.init({
        server: './src/',
        browser: 'google chrome',
        port: 5000
    })
})

gulp.task( 'watch', ['sass', 'serve'], () => {
    gulp.watch(folder.src + path.html.src).on( 'change', bs.reload )
    gulp.watch(folder.src + path.sass.src).on( 'change', bs.reload )
    gulp.watch(folder.src + path.js.src).on( 'change', bs.reload )
})

gulp.task( 'default', ['watch'] )
