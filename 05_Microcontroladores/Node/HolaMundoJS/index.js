// get started en documentación https://nodejs.org/en/docs/guides/getting-started-guide
import { createServer } from 'http';
// const http = require('http'); para utilizar import, debemos agregar: "type": "module" en el archivo package.json

const hostname = 'localhost';
const port = 3000;

// req (es un alias) hace referencia a lo que el servidor recibe. Es un objeto de tipo IncomingMessage
// res (es un alias) hace referencia al objeto que hace posible que el servidor responda. Es un objeto de tipo ServerResponse
// Al llamar al servidor, este devolverá un status OK (200), una cabecera con el tipo de respuesta y un contenido
const server = createServer((req, res) => {
  res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/plain');
  //   res.end('Hola mundo');
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hola mundo</h1>');
});

// Ponemos el servidor a la escucha según el host y el puerto establecido
server.listen(port, hostname, () => {
  console.log(`Servidor en ejecución en http://${hostname}:${port}/`);
});