"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CorreoModel = new mongoose_1.Schema({
    correo: String
});
exports.default = (0, mongoose_1.model)('correos', CorreoModel);
