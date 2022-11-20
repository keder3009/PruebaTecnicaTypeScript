"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require('body-parser');
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const routes_1 = __importDefault(require("./routes"));
require("./config/database");
class Server {
    app;
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        (0, routes_1.default)(this.app);
    }
    config() {
        this.app.set('port', 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)(config_1.corsOptions));
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(bodyParser.json({ limit: "50mb" }));
        this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server corriendo en', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
