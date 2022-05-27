//importar paquete http

const http = require('http');


//Creamos un servidor usando un metodo CreateServer

const server = http.createServer( (request,response) =>{
    //Vamos a responder al cliente
    response.write('Hola dede mi servidor')

    //* a una respuesta se le debe indicar cuando terminar

    response.end()
})

// Ponemos el servidor a escuchar en un puerto
server.listen(8000, () =>{
    console.log('Servidor iniciando en el puerto 8000')
})