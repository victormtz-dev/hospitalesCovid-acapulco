const express = require('express');
const path = require('path');
const expbhs = require('express-handlebars');
const handl = require('handlebars');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

//initializations
const app = express();
require('./config/passport');

// Settings

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expbhs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialstDir: path.join(app.get('views'), 'partials'),
    handlebars: handl,
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



//Global variables
app.use(
    (req, res, next) => {
        res.locals.success_msg = req.flash('success_msg');
        res.locals.error_msg = req.flash('error_msg');
        res.locals.error = req.flash('error');
        res.locals.user = req.user || null;
        next();
    }
);

//Routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/hospital.routes'))
app.use(require('./routes/users.routes'))
app.use(require('./routes/information.routes'))


// Static files

app.use(express.static(path.join(__dirname, 'public')))

module.exports = app;