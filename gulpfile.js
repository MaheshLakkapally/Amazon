var express = require('express');
var gulp = require('gulp');
var dust = require('gulp-dust');

var app = express();
app.use('/', express.static('public'));

app.get('/getlist', function(request, response) {
    response.sendfile(__dirname + "/data/shirts.json");
});

app.get('/sortPrice', function(request, response) {
    response.sendfile(__dirname + "/data/shirts.json");
});

gulp.task('dust', function() {
    gulp.src('public/js/*.html')
        .pipe(dust())
        .pipe(gulp.dest('public/js'))
});



gulp.task('express', function() {
    var server = app.listen(3001, function() {
        console.log("server started as port 3001")
    })
});

gulp.task('test', function() {
    console.log("testing gulp task");
});

app.get('/shirtdetails', function(request, response) {

    var id = request.query.id;
    if (id == 1) {
        response.sendfile(__dirname + "/data/shirtdetails.json");
    } else if (id == 2) {
        response.sendfile(__dirname + "/data/details.json");
    } else {
        response.sendfile(__dirname + "/data/default.json");
    }
});



gulp.task('watch', function() {

    gulp.watch('./public/js/*.html', function() {
        gulp.run('dust');
    });
});

gulp.task('default', ['dust', 'express', 'watch']);
