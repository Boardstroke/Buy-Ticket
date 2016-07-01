var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var User = mongoose.Schema({
  id: ObjectId,
  nome: String,
  email: {type: String, unique: true},
  senha: String
});

module.exports = mongoose.model('User', User);
