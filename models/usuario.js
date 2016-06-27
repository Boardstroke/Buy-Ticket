//Defindo o schema do db usuario

function make(Schema, mongoose){
  usuarioSchema = new Schema({
    nome: String,
    email: String,
    password: String
  });
  mongoose.model('usuarios', usuarioSchema);
};
module.exports.make = make;
