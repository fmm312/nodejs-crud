const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express(); // iniciando o App

app.use(express.json()); // permitir enviar dados para aplicação no formato JSON
app.use(cors()); // permitir acesso da api em qualquer domínio


mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true, useUnifiedTopology: true }
); // iniciando o DB

requireDir('./src/models'); // importando models

const Product = mongoose.model('Product')

app.use('/api', require('./src/routes')); // Rotas

app.listen(3001)
