"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pubServices = void 0;
const mailes_1 = require("../libs/mailes");
const pub_dto_1 = require("../dto/pub.dto");
const enums_1 = require("../dto/enums");
const pub_model_1 = __importDefault(require("../models/pub.model"));
const correo_model_1 = __importDefault(require("../models/correo.model"));
class PubServices {
    async list() {
        const publications = await pub_model_1.default.find().sort({ _id: -1 });
        return publications;
    }
    async save(data) {
        const publication = new pub_model_1.default(data);
        await publication.save();
        if (data.tipo == enums_1.PubStatus.slideshow)
            return pub_dto_1.pubSendNotificationResponse.execute({
                status: true,
                message: "Se agrego una publicación",
            });
        return pub_dto_1.pubSendEmailResponse.execute(mailes_1.transporter);
    }
    async addEmail(correo) {
        const correos = new correo_model_1.default({ correo: correo });
        await correos.save();
        return { status: true, message: "correo agregado" };
    }
}
exports.pubServices = new PubServices();
