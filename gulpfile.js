let gulp    = require('gulp')
    bs      = require('browser-sync').create()

let folder = {
    src: 'src/'
}

gulp.task( 'serve', () => {
    bs.init({
        server: './src/',
        browser: 'google chrome',
        port: 5000
    })
})

gulp.task( 'watch', ['serve'], () => {
    gulp.watch(folder.src + '**/*.html').on( 'change', bs.reload )
    gulp.watch(folder.src + 'css/**/*.css').on( 'change', bs.reload )
    gulp.watch(folder.src + 'js/**/*.js').on( 'change', bs.reload )
})

gulp.task( 'default', ['watch'] )