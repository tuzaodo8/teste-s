const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

/*app.post('/index.html', (req, res) => 
    res.send('kkkjkkj')
    
);*/
const port = 3000;
require('dotenv').config();

const emailUsuario = "aguarium.ads@gmail.com";
const senhaUsuario = "zzwbndpmkwxomxuu"; // Use a senha de aplicativo se for o Gmail.

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post('/send-email', (req, res) => {
    const email = req.body.email;
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: emailUsuario,
            pass: senhaUsuario
        }
    });

    transporter.sendMail({
        from: emailUsuario,
        to:email,
        replyTo: emailUsuario,
        subject: "Seja(O) bem-vindo",
        text: "Mensagem de teste..."
    }, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erro em enviar o e-mail');
        } else {
            console.log('E-mail enviado', info.response);
            res.send('E-mail foi enviado')
        }
    });
});

app.listen(port, () => console.log(`Você foi aceito na porta ${port}`));
