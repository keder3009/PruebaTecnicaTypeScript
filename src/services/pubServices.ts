import { transporter } from "../libs/mailes";
import pubContracts from "../contracts/pub.contract";
import {
  pubListResponse,
  pubSaveRequest,
  pubSaveResponse,
  pubSendNotificationResponse,
  pubSendEmailResponse
} from "../dto/pub.dto";
import { PubStatus } from "../dto/enums";
import PubModel from "../models/pub.model";
import CorreoModel from "../models/correo.model";
class PubServices implements pubContracts {
  public async list(): Promise<pubListResponse[]> {
    const publications: pubListResponse[] = await PubModel.find().sort({_id:-1});
    return publications;
  }
  
  public async save(data: pubSaveRequest): Promise<pubSaveResponse> {
    const publication = new PubModel(data);
    await publication.save();
    if (data.tipo == PubStatus.slideshow)
    return pubSendNotificationResponse.execute({
      status: true,
      message: "Se agrego una publicación",
    });
    
    return pubSendEmailResponse.execute(transporter);
  }
  
  public async addEmail(correo:string): Promise<any> {
    const correos = new CorreoModel({correo: correo});
    await correos.save();
    
    return {status: true, message: "correo agregado"};
  }
}
export const pubServices = new PubServices();
