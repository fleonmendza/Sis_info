var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.set('useFindAndModify', true);
var LibroSchema =  Schema({
  Autor:{
    nombre:String,
    apellidos: String
  } ,
  Titulo: String,
  Genero: String,
  Edición: Number,
  Editorial: String,
  Numero_de_Páginas: Number,
  sinopsis: String
});

module.exports = mongoose.model('Libro', LibroSchema);