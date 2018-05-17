let gulp          = require('gulp')
let sass          = require('gulp-sass')
let sourcemaps    = require('gulp-sourcemaps')
let autoprefixer  = require('gulp-autoprefixer')
let bs            = require('browser-sync').create()
let browserify    = require('browserify')
let babelify      = require('babelify')
let source        = require('vinyl-source-stream')
let buffer        = require('vinyl-buffer')
let standard      = require('gulp-standard')

let folder = {
    src: './src/',
    build: './build/',
    watch: 'src/'
}

let path = {
    html: {
        src: 'index.html',
        watch: '**/*.html'
    },
    sass: {
        src: 'sass/main.scss',
        build: 'css',
        dist: 'css',
        watch: 'sass/**/*.scss'
    },
    js: {
        src: 'js/main.js',
        build: 'js',
        dist: 'js',
        watch: 'js/**/*.js'
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

gulp.task( 'scripts', () => {
    let bundler = browserify({
            debug: true,
            entries: [folder.src + path.js.src]
        })
        .transform(babelify.configure({
            presets: [
              ['react'],
              ['es2015']
            ]
        }))
        .bundle()
        .on('error', function (err) {
            console.log(err)
            this.emit('end')
        })
        .pipe(source('.'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sourcemaps.write('../index', {
            sourceMappingURLPrefix: 'http://localhost:5000/build/js'
        }))
        .pipe(gulp.dest(folder.build + path.js.build + '/index.js'))
})

gulp.task( 'serve', () => {
    bs.init({
        server: {
            baseDir: './'
        },
        browser: 'google chrome',
        port: 5000
    })
})

gulp.task('lint', function () {
  return gulp.src([folder.src + path.js.watch])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: false,
      showFilePath: true,
      quiet: false
    }))
})

gulp.task( 'watch', ['sass', 'scripts', 'lint', 'serve'], () => {
    gulp.watch(folder.watch + path.html.watch)
    gulp.watch(folder.watch + path.sass.watch, ['sass'])
    gulp.watch(folder.watch + path.js.watch, ['lint', 'scripts'])

    gulp.watch(folder.watch + '**/*').on( 'change', bs.reload )

    // Atomic design development is made in atomic.html
    gulp.watch( 'atomic.html' ).on( 'change', bs.reload )
})

gulp.task( 'default', ['watch'] )
