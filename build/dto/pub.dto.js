"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pubSendEmailResponse = exports.pubSendNotificationResponse = void 0;
const correo_model_1 = __importDefault(require("../models/correo.model"));
class pubSendNotificationResponse extends Object {
    status;
    message;
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
    static execute(data) {
        return new pubSendNotificationResponse(data.status, data.message);
    }
}
exports.pubSendNotificationResponse = pubSendNotificationResponse;
class pubSendEmailResponse extends Object {
    status;
    message;
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
    static async execute(transporter) {
        const correos = await correo_model_1.default.find();
        correos.forEach(async (e) => {
            if (e.correo != "")
                await transporter.sendMail({
                    from: '"Publicacion de noticias" <noticias@gmail.com>',
                    to: e.correo,
                    subject: "Codigo de verificación",
                    text: "Vamos a proceder a verificar la información",
                    html: "<div>Se agrego una nueva noticia</div>",
                });
        });
        return new pubSendEmailResponse(true, "Se agrego una publicación");
    }
}
exports.pubSendEmailResponse = pubSendEmailResponse;
