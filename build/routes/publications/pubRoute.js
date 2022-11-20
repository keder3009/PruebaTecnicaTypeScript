"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pubController_1 = require("../../controllers/pubController");
class PubRouter {
    router = (0, express_1.Router)();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/', pubController_1.pubController.list);
        this.router.post('/save', pubController_1.pubController.save);
        this.router.post('/addEmail', pubController_1.pubController.addEmail);
    }
}
const pubRouter = new PubRouter();
exports.default = pubRouter.router;
