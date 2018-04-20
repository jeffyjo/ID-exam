let gulp    = require('gulp')
    bs      = require('browser-sync').create()

gulp.task( 'serve', () => {
    bs.init({
        server: './src/',
        browser: 'google chrome',
        port: 5000
    })

    gulp.watch('src/**/*.html').on( 'change', bs.reload )
    gulp.watch('src/css/**/*.css').on( 'change', bs.reload )
    gulp.watch('src/js/**/*.js').on( 'change', bs.reload )
})

gulp.task( 'default', ['serve'] )