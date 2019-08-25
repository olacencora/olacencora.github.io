let gulp = require('gulp');
let sass = require('gulp-sass');
gulp.task('sass',() => {
    return gulp.src('app/scss/**/*.scss') // wszytskie foldery w scss ibierze wszystkie pliki z rozszezeniem scss
    .pipe(sass()) // na wszytskich plikach wykonujemy transpilację - czyliz mienia
    .pipe(gulp.dest('app/css')); // wyrzuca wynik tej kompilacji do folderu css
});

gulp.task('watch',() => {
    gulp.watch('app/scss/**/*scss', gulp.series('sass')); //jesli zasejwujemyt o od razu wykona popredniego taska
})