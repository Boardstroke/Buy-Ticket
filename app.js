'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

process.env.PORT ?mongoose.connect('mongodb://matheus:Dishonored@jello.modulusmongo.net:27017/pu8motYw')  :mongoose.connect('mongodb://localhost/users');

var User = mongoose.model('User', new Schema({
  id: ObjectId,
  nome: String,
  email: {type: String, unique: true},
  senha: String
}));

var app = express();

//Transforma o objeto json em um array
var teste = require('./db/teste.json');
var list = Object.keys(teste).map( (value) => teste[value]);

//Seta o tipo de template e o lugar onde estão
app.set('view engine', 'jade');
app.set('views', (__dirname +  '/views'));

//Conteudo estatico
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/dash/static', express.static(path.join(__dirname, 'public')));
//Routeamento
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
//Envia a resposta pra quem requisita a pagina inicial do site
app.get('/', function(req, res){
  res.render('index');
});

//Pagina de login
app.get('/login', function(req, res){
  res.render('login',{isLogin: true});
});
//Login
app.post('/signin', function(req, res, next){

});
//Cadastro
app.post('/signup', function(req, res, next){

    var user = new User({
      nome: req.body.cNome,
      email: req.body.cEmail,
      senha: req.body.cSenha
    });
    user.save(function(err){
      if(err) throw err;


      req.session.user = req.body.cEmail;
      res.redirect('/dash');
    });

});

function isLogin(){

};

//Dash com todas as festas
app.get('/dash/:title?', function(req, res){
  var title = req.params.title;
  if(title === undefined){
    res.status(503);
    var isDash = true;
    res.render('dash', {db: list, isDash: isDash});
  }else{
    var isParty = true
    var festa = teste[title] || {};;
    res.render('party', {db: festa, isDash: isDash, isParty: isParty});
  }
})


app.listen(process.env.PORT || 3000);
module.exports = app;
