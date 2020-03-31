const routes = require('express').Router();
//const axios = require('axios');
const nodemailer = require('nodemailer');

const objeto = {email: {}, url:{}}

routes.post('/posts', async (req, res) =>{

    objeto.email = req.body.email;
    objeto.url = req.body.url;

    var transporte = nodemailer.createTransport({
        service: 'gmail', // Como mencionei, vamos usar o Gmail
        auth: {
          user: 'helpme.tcc2020@gmail.com', // Basta dizer qual o nosso usuário
          pass: '@Sistemasfafibe'             // e a senha da nossa conta
        } 
    });

    var email = {
        from: 'helpme.tcc2020@gmail.com', // Quem enviou este e-mail
        to: `${objeto.email}`, // Quem receberá
        subject: 'Teste',  // Um assunto bacana :-) 
        html: `Teste de email </br> <img src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=https:${objeto.url}">` // O conteúdo do e-mail
    };

    await transporte.sendMail(email, function(err, info){
        if(err)
          throw err; // Oops, algo de errado aconteceu.
      
        res.send(`Email enviado! Leia as informações adicionais: ${info}`);
    });
});

module.exports =  routes;