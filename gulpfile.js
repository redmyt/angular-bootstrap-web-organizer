var gulp = require('gulp'),
    fs = require('fs'),
    path = require('path'),
    merge = require('merge-stream'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    autopref = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    ngAnnotate = require('gulp-ng-annotate'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');


function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function(file) {
            return fs.statSync( path.join(dir, file) ).isDirectory();
    });
}
var componentsPath = 'src/app/components/',
    components = getFolders(componentsPath);


gulp.task('index', function() {
    gulp.src('./src/index.pug')
        .pipe( pug() )
        .pipe( gulp.dest('build/') );
});

gulp.task('views', function() {
    var viewsTasks = components.map(function(component) {
        return gulp.src( path.join(componentsPath, component, '/*.pug') )
                   .pipe( pug() )
                   .pipe( gulp.dest('build/app/' + component) );    
   });
   return merge(viewsTasks);
});

gulp.task('sass', function() {
    gulp.src('./src/assets/sass/main.sass')
        .pipe( sass() )
        .pipe( autopref() )
        .pipe( cleanCSS() )
        .pipe( gulp.dest('build/assets/css/') );
});

gulp.task('jsLibs', function() {
    gulp.src( require('./dependencies.json').jsLibs )
        .pipe( concat('libs.js') )
        .pipe( gulp.dest('build/assets/js') );
});

gulp.task('jsApp', function() {
    gulp.src( require('./dependencies.json').jsApp )
        .pipe( ngAnnotate() )
        .pipe( uglify() )
        .pipe( concat('app.js') )
        .pipe( gulp.dest('build/app/') );
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.pug', ['index', 'views']);
    gulp.watch('src/**/*.sass', ['sass']);
    gulp.watch('src/app/**/*.js', ['jsApp']);
});

gulp.task(
    'build', 
    [
        'index', 
        'views', 
        'sass', 
        'jsLibs', 
        'jsApp'
    ]
);
