"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pubRoute_1 = __importDefault(require("./publications/pubRoute"));
class Routes {
    constructor() { }
    start(app) {
        app.use('/api/publications', pubRoute_1.default);
    }
}
const routes = new Routes();
exports.default = routes.start;
