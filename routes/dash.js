var express = require('express');
var router = express.Router();


var User = require('.././models/usuario');

var teste = require('.././db/teste.json');
var list = Object.keys(teste).map( (value) => teste[value]);

//Dash com todas as festas
router.get('/dash/:title?', function(req, res){
  if(req.session && req.session.user){
    User.findOne({email: req.session.user.email}, function(err, user){
      if(!user) {
        req.session.reset();
        res.redirect('/login');
      }else {
        res.locals.user = user;
        var title = req.params.title;
        if(title === undefined){
          res.status(503);
          res.render('dash', {db: list, isDash: true});
          
        }else{
          var festa = teste[title] || {};;
          res.render('party', {db: festa, isDash: true, isParty: true});
        }
      }
    });
  }
});

module.exports = router;
