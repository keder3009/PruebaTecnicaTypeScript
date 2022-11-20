import { Application } from "express";
import pubRouter from "./publications/pubRoute";
class Routes {
  constructor() {}
  start(app: Application): void {
    app.use('/api/publications', pubRouter);
  }
}

const routes = new Routes();
export default routes.start;
