// get started en documentación https://expressjs.com/en/starter/hello-world.html
import express from 'express';
// Instanciamos express
const server= express();
const port = 3000;

// Cuando se reciba una llamada a la raíz del sitio (get), respondemos
// req (es un alias) hace referencia a lo que el servidor recibe. Es un objeto de tipo Request
// res (es un alias) hace referencia al objeto que hace posible que el servidor responda. Es un objeto de tipo Response
server.get('/', (req, res) => {
  res.send('<h1>Hola mundo</h1>');
});

server.get('/json', (req, res) => {
  res.json({
    nombre: 'Juan Luis',
    curso: 'Microcontroladores'
  });
});

server.listen(port, () => {
  console.log(`Servidor en ejecución en puerto ${port}`);
});

