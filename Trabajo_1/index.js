var Http = require( 'http' );
var server = Http.createServer(function(request,response){
    console.log('Alguien entró... 1,2,3');
    console.log(request.url);
    console.log(JSON.stringify(request));
    response.writeHead(200,"Content-Type:text/html")

    if(request.metod =='GET'){
    response.write("<style> h1 {color:blue}</style>");
    response.write("Fola ico fes aragon, la mejor carrera");

   }else {
    response.write("no es get");
  }
  response.end();

});

server.listen( 3000, function( ) {
console.log( 'Escuchando conexión en el puerto 3000' );
});
