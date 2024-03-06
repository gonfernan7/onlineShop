const express = require('express');
const cors = require('cors');

//Aplicacion encargada de gestionar nuestras rutas
const app = express(); 

app.use(cors());
app.use(express.json());


app.use('/api',require('./routes/api'));

module.exports = app;