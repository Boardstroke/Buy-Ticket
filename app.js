'use strict';
// Sessão de requisição
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('client-sessions');

var router = express.Router();

// Requerindo rotas
var dash = require('./routes/dash.js');
var index = require('./routes/index.js');
var login = require('./routes/login.js');

process.env.PORT ?mongoose.connect('mongodb://matheus:Dishonored@jello.modulusmongo.net:27017/pu8motYw')  :mongoose.connect('mongodb://localhost/users');

var User = require('./models/usuario');

var app = express();

//Seta o tipo de template e o lugar onde estão
app.set('view engine', 'jade');
app.set('views', (__dirname +  '/views'));

//Conteudo estatico
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/dash/static', express.static(path.join(__dirname, 'public')));
//Routeamento

app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  cookieName: 'session',
  secret: 'blargadeefejwfgtg4blfmioosdkfsdhjkfhsajkhsadhfjasdargblarg',
  duration: 24 * 60 * 60 * 1000,
  activeDuration: 1000 * 60 * 5
}));


//Envia a resposta pra quem requisita a pagina inicial do site
app.get('/', index);

//Pagina de login
app.get('/login', login);

//Login
app.post('/signin', login);

//Cadastro
app.post('/signup', login);

//Dash
app.get('/dash/:title?', dash);

//Deslogar
app.get('/logout', login);

app.listen(process.env.PORT || 3000);
module.exports = app;
