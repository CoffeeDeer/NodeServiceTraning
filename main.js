var express = require('express');
var path = require('path');
//var routes = require('./routes/index');

var app = express();

app.use(express.static('static'));

// view engine setup
app.set('views', path.join(__dirname, 'static'));
app.set('view engine', 'pug');

if (app.get('env') === 'development') {
    app.locals.pretty = true;
}

app.get('/', function (req, res) {
    res.render('test',{
        title: 'Hey',
        message: 'Hello there!'
    });
});

app.listen(80, () => {
    console.log('Express App on port 80!');
});


//app.use('/', routes);