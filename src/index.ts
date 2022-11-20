
const bodyParser = require('body-parser')
import express, { Application } from "express";

import morgan from "morgan";
import cors from "cors";

import { corsOptions } from "./config/config";
import Routes from "./routes";
import "./config/database";


class Server {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        Routes(this.app);
    }

    config(): void {
        this.app.set('port', 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors(corsOptions));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(bodyParser.json({ limit: "50mb" }));
        this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server corriendo en', this.app.get('port'));
        })
    }
}

const server = new Server();
server.start();

