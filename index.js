const express = require('express');
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

app.listen(3000, function(){
    console.log("Servidor rodando");
})