var express = require('express');
var csrf = require('csurf');
var cookieParser = require('cookie-parser')
var bodyParser  = require('body-parser')


var app = express();
var csrfProtection = csrf({ cookie: true })
var parseForm  = bodyParser.urlencoded({extended: false})
app.set('view engine', 'ejs');
app.use(cookieParser())

app.get('/', csrfProtection, (req, res) => 
    res.render('index', {csrfToken: req.csrfToken()} )
)

app.post('/token', parseForm, csrfProtection, (req, res) => 
    res.send('success')
)

app.listen(3000);
console.log('app is listening at localhost:3000...');