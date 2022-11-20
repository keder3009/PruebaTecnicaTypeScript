import { Router } from "express";
import { pubController } from "../../controllers/pubController";

class PubRouter {
    public router : Router = Router();
    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/', pubController.list);
        this.router.post('/save', pubController.save);
        this.router.post('/addEmail', pubController.addEmail);
    }
}

const pubRouter = new PubRouter();
export default pubRouter.router;

