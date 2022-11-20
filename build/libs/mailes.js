"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodeMailer = require('nodemailer');
exports.transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "moterosyrutasapp@gmail.com",
        pass: "yzklpszmyoniykty"
    }
});
exports.transporter.verify().then(() => {
    console.log('Servicio de correos conectado');
});
