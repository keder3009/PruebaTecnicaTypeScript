import { Request, Response } from "express";

import { pubServices } from "../services/pubServices";

class PubController {
  public async list(req: Request, res: Response) {
    const response = await pubServices.list();
    res.json(response)
  }

  public async save(req: Request, res: Response) {
    const response = await pubServices.save(req.body);
    res.json(response)
  }

  public async addEmail(req: Request, res: Response) {
    const response = await pubServices.addEmail(req.body.correo);
    res.json(response)
  }
}
export const pubController = new PubController();
