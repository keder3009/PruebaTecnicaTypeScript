"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PubModel = new mongoose_1.Schema({
    titulo: String,
    texto: String,
    tipo: String,
    tags: Object,
    images: Object
});
exports.default = (0, mongoose_1.model)('pub', PubModel);
