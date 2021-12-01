  //importamos el modulo http para un servidor web
  const http = require('http');

  //importamos express, luego de haberlo instalado
  const express = require('express');

  //creamos una aplicacion express nueva
  const app = express();



  const path = require('path');

  app.use(express.static(path.join(__dirname, 'public')));



  //nueva ruta /bienvenida
  app.use('/bienvenida', (request, response, next) => {
      console.log('Un usuario ingreso al servicio del url /bienvenida');

    response.send('<h1>Bienvenido usuario/a</h1>');
  });

app.use((request, response, next) => {
    console.log('Ruta desconocida');
    response.status(404).send('<h1>Error 404 - Not found</h1>');
});

  //creamos el servidor web, pero sin ejecutarlo
  const server = http.createServer(app);

  //iniciamos el servidor web, esta linea hace que se ejecute realmente en base a la configuracion anterior
  server.listen(5000);
