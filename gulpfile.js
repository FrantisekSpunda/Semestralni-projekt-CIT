// For use imageMin run "npm i --save-dev gulp-imagemin"                                                                            --imagemin
// For use uglify run "npm i --save-dev gulp-uglify". It is used for minify files                                                --uflify
// For use sass run "npm i --save-dev gulp-sass"                                                                                    --sass
// For add all js in one file use concat. First you must run "npm i --save-dev gulp-concat"                                         --concat

const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

/*
    --TOP LEVEL FUNCTIONS --
    gulp.task - Define tasks
    gulp.src - Point tofiles to use
    gulp.dest - Points to folder to output
    gulp.watch - Watch files and folders for changes
    gulp.series - in gulp 4x is used same like [] in gulp 3x
*/

// Logs Message
gulp.task('message', async () => {
    return console.log('Gulp is running...');
});

// Default tasks
// gulp.task('default', async () => {
//     return console.log('Gulp is running...');
// });

// Copy All HTML files
gulp.task('copyHtml', async () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

// Copy All PDF files
gulp.task('copyPdf', async () => {
    gulp.src('src/*.pdf')
        .pipe(gulp.dest('dist'));
});

// Copy All mp4 files
gulp.task('copyMp4', async () => {
    gulp.src('src/*.mp4')
        .pipe(gulp.dest('dist'));
});

// Copy All ods files
gulp.task('copyOds', async () => {
    gulp.src('src/*.ods')
        .pipe(gulp.dest('dist'));
});

// Copy All zip files
gulp.task('copyZip', async () => {
    gulp.src('src/*.zip')
        .pipe(gulp.dest('dist'));
});

// Optimaze Images
gulp.task('imageMin', async () => {
    gulp.src('src/images/*')
        .pipe(imageMin())
        .pipe(gulp.dest('dist/images'));
});

// Minify JS
// gulp.task('minify', async () => {
//     gulp.src('src/js/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });

// Compile Sass
gulp.task('sass', async () => {
    gulp.src('src/sass/*')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});


// Scripts
gulp.task('scripts', async () => {
    gulp.src('src/js/*.js')
        .pipe(concat('index.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});


// All in one task
gulp.task('default', gulp.series('message', 'sass', 'imageMin', 'copyHtml', 'scripts', 'copyPdf', 'copyMp4', 'copyOds', 'copyZip'));


// Gulp watch
gulp.task('watch', () => {
    gulp.watch('src/js/*.js', gulp.series('scripts'));
    gulp.watch('src/images/*', gulp.series('imageMin'));
    gulp.watch('src/sass/*.scss', gulp.series('sass'));
    gulp.watch('src/*.html', gulp.series('copyHtml'));
    gulp.watch('src/*.pdf', gulp.series('copyPdf'));
    gulp.watch('src/*.mp4', gulp.series('copyMp4'));
    gulp.watch('src/*.ods', gulp.series('copyOds'));
    gulp.watch('src/*.zip', gulp.series('copyZip'));
    gulp.watch('src/sass/extension/*.scss', gulp.series('sass'));
    gulp.watch('src/sass/core/*.scss', gulp.series('sass'));
    gulp.watch('src/sass/media-query/*.scss', gulp.series('sass'));
})