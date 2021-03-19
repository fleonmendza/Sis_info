var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlumnoSchema =  Schema({
    numeroCuenta: String,
  nombre: {
    nombres: String,
    paterno: String,
    materno: String
  },
  semestre: Number,
  promedio: Number
});

module.exports = mongoose.model('Alumno', AlumnoSchema);