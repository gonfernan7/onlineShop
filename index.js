const http = require('http');

const app = require('./src/app');


//Config del .env
require('dotenv').config();

//Config de DB
require('./src/config/db');


//Todas las peticiones de este servidor las va a gestionar app
const server = http.createServer(app);


const PORT = process.env.PORT || 3000;

server.listen(PORT);

server.on('listening',() =>{
    console.log(`Servidor escuchando en puerto ${PORT}`);
});

