var mongoose = require('mongoose');
var Libro = require('./models/libro.js');

mongoose.connect('mongodb+srv://fleonmendoza:Alfa1998.@cluster0.dhy8l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  }).then(() => {
    console.log('Conectado a Mongo DB Atlas')
  })
  .catch(err => console.log(err));



  function nuevoLibro(){
    // tu código aquí
    var lib = Libro({
      Autor: {
        nombre: "H.P", 
        apellido:"Lovecraft",
      },
      Titulo: "En las montañas de la Locura",
      Genero: "Terror",
      Edición: 2004,
      Editorial: "VALDEMAR",
      Numero_de_Páginas: 180,
      sinopsis: "En las montañas de la locura es la memoria en primera persona de un geólogo de la Universidad de Miskatonic sobre una reciente expedición dirigida por él al continente antártico y su trágico final. Narra el profesor superviviente cómo se inició la expedición, con aeroplanos y trineos tirados por perros, y cómo en uno de los vuelos de reconocimiento se toparon con una impresionante cordillera, tal vez más elevada que el Himalaya. Un primer grupo llega por tierra a sus estribaciones y acampa al pie de los montes. Las exploraciones de la zona llevan al grupo a descubrir una cueva en cuyo interior encuentran catorce fósiles de una estatura superior a la humana pertenecientes a unos seres totalmente desconocidos para la ciencia: el cuerpo principal del organismo tiene forma de barril, sostenido por una serie de patas, de su extremo superior surge un ramillete de tentáculos y dispone de unas alas membranosas replegadas a ambos costados. Un segundo grupo, con el que viaja el narrador, pierde, tras estas intrigantes informaciones, el contacto por radio con el primero, y se dirigen al lugar en aeroplano. El espectáculo que les espera al llegar es dantesco... Poco después, en una inspección aérea sobre la cordillera harán un descubrimiento histórico y fascinante... Muchos críticos han querido ver en este espeluznante relato una magistral continuación al misterioso final de Las aventuras de Arthur Gordon Pin , de E.A. Poe , precursor y maestro de Lovecraft."


    });
    
    lib.save(function(err, data) {
      if (err) {
        console.log("------------------------ERROR --------------------------");
      } else {
        console.log("--------------------------OK ---------------------------");
      }
    });
  
  
  
  }
    
    
    function main() {
      nuevoLibro();
    }
    
    main();    // ejecutamos main