var mongoose = require('mongoose');
var Alumno = require('./models/alumnos.js');

mongoose.connect('mongodb+srv://fleonmendoza:Alfa1998.@cluster0.dhy8l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  }).then(() => {
    console.log('Conectado a Mongo DB Atlas')
  })
  .catch(err => console.log(err));

function nuevoAlumno() {
  var alum = Alumno({
    numeroCuenta: "314034957",
    nombre: {
      nombres: "Esteban Federico", 
      paterno: "Leon",
      materno: "Mendoza"
    },
    semestre: 8,
    promedio: 8.8
  });

  alum.save(function(err, data) {
    if (err) {
      console.log("------------------------ERROR --------------------------");
    } else {
      console.log("--------------------------OK ---------------------------");
    }
  });
}

function nuevosAlumnos() {

  var alumnos=[
    { numeroCuenta: "1111111",nombre: {primer: "Jesús", paterno: "Hernandez", materno: "Cabrera" },semestre: 6, promedio: 7.99},
    { numeroCuenta: "2222222",nombre: {primer: "Diego", paterno: "Pérez", materno: "Zedillo" },semestre: 2, promedio:8.2},
    { numeroCuenta: "3333333",nombre: {primer: "Alex", paterno: "Pérez", materno: "Obrador" },semestre: 3, promedio: 7.3},
    { numeroCuenta: "4444444",nombre: {primer: "René", paterno: "Dávila", materno: "Moreno" },semestre: 4, promedio: 7.1},
    { numeroCuenta: "5555555",nombre: {primer: "Ari", paterno: "Olarte", materno: "Paz" },semestre: 8, promedio: 9.2},

  ];


  Alumno.collection.insertMany(alumnos,function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}
function main() {
  nuevoAlumno();
  //nuevosAlumnos();
}

main(); // ejecutamos main