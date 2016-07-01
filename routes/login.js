var express = require('express');
var router = express.Router();
var User = require('.././models/usuario')
//Envia a pagina de login com um paremetro para não mostrar o menu
router.get('/login', function(req, res, next){
  res.render('login', {isLogin: true});
});

//Envia para o servidor um formulário de cadastro e salva no BD
router.post('/signup', function(req, res, next){

    var user = new User({
      nome: req.body.cNome,
      email: req.body.cEmail,
      senha: req.body.cSenha
    });
    user.save(function(err){
      if(err) throw err;

      req.session.user = user;
      res.redirect('/dash');
    });
});
// Envia as informações para o servidor, se exister usuário dá acesso ao dash
router.post('/signin', (req, res) =>{
  var lemail = req.body.lNome;
  var lsenha = req.body.lSenha;

  User.findOne({email: lemail, senha:lsenha}, function(err, user){
    if(err){
      console.log('Errou!!!!!');
    } else if(!user){
      res.redirect('/login');
    }else{
        req.session.user = user;
        res.redirect('/dash');
    }
  });
});
// Desconecta o usuario ao apertar o botão sair dentro da pagina dash
router.get('/logout', (req, res) => {
  req.session.reset();
  res.redirect('/');
});

module.exports = router;
