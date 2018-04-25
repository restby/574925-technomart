var gulp 					= require('gulp'),
		browserSync 	= require('browser-sync'),
		concat 				= require('gulp-concat'),
		uglify 				= require('gulp-uglifyjs'),
		cssnano 			= require('gulp-cssnano'),
		rename 				= require('gulp-rename'),
		del 					= require('del'),
		cache 				= require('gulp-cache'),
		autoprefixer 	= require('gulp-autoprefixer');

gulp.task('cssMin', function() {
	return gulp.src('src/css/style.css')
	.pipe(autoprefixer(['last 15 versions', '> 1%'], {cascade:true}))
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('src/css/'))
	.pipe(browserSync.reload({stream: true}))
})
gulp.task('jsMin', function() {
	return gulp.src('src/js/**/*.js')
	.pipe(uglify())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('src/js/'));
});
gulp.task('browser-sync', function() {
	browserSync({
		server:{
			baseDir: 'src'
		},
		notify: false
	});
})

gulp.task('clean', function() {
	return del.sync('dist/');
});

gulp.task('watch', ['browser-sync', 'cssMin', 'jsMin'], function() {
	gulp.watch('src/css/**/*.css', ['cssMin']);
	gulp.watch('src/**/*.html', browserSync.reload);
	gulp.watch('src/js/**/*.js', browserSync.reload);
})

gulp.task('build', ['clean', 'cssMin', 'jsMin'], function() {
	var buildCss = gulp.src('src/css/**/*.css')
	.pipe(gulp.dest('dist/css'));

	var buidFonts = gulp.src('src/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('src/js/**/*')
	.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('src/*.html')
	.pipe(gulp.dest('dist/'));
})