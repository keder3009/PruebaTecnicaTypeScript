const nodeMailer = require('nodemailer');

export const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "moterosyrutasapp@gmail.com",
        pass: "yzklpszmyoniykty"
    }
});

transporter.verify().then(() =>{
    console.log('Servicio de correos conectado');
})
