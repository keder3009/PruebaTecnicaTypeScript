"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pubController_1 = require("../controllers/pubController");
class PubRouter {
    router = (0, express_1.Router)();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/', pubController_1.pubController.list);
    }
}
const pubRouter = new PubRouter();
exports.default = pubRouter.router;
