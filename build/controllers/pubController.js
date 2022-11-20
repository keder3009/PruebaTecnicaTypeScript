"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pubController = void 0;
const pubServices_1 = require("../services/pubServices");
class PubController {
    async list(req, res) {
        const response = await pubServices_1.pubServices.list();
        res.json(response);
    }
    async save(req, res) {
        const response = await pubServices_1.pubServices.save(req.body);
        res.json(response);
    }
    async addEmail(req, res) {
        const response = await pubServices_1.pubServices.addEmail(req.body.correo);
        res.json(response);
    }
}
exports.pubController = new PubController();
