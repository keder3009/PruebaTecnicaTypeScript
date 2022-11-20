import CorreoModel from "../models/correo.model";

export interface pubListResponse {
  id?: number;
  titulo?: string;
  texto?: string;
  tipo?: string;
  tags?: string[];
  images?: string[];
}

export interface pubSaveResponse {
  status: boolean;
  message: string;
}

export interface pubSaveRequest {
  titulo: string;
  texto: string;
  tipo: string;
  tags: string[];
  images: string[];
}

export class pubSendNotificationResponse extends Object {
  status: boolean;
  message: string;

  constructor(status: boolean, message: string) {
    super();
    this.status = status;
    this.message = message;
  }

  static execute(data: pubSaveResponse): pubSendNotificationResponse {
    return new pubSendNotificationResponse(data.status, data.message);
  }
}

export class pubSendEmailResponse extends Object {
  status: boolean;
  message: string;

  constructor(status: boolean, message: string) {
    super();
    this.status = status;
    this.message = message;
  }

  static async execute(transporter: any): Promise<pubSendEmailResponse> {
    const correos: string[] = await CorreoModel.find();
    correos.forEach(async (e: any) => {
      if (e.correo != "")
        await transporter.sendMail({
          from: '"Publicacion de noticias" <noticias@gmail.com>',
          to: e.correo,
          subject: "Codigo de verificación",
          text: "Vamos a proceder a verificar la información",
          html: "<div>Se agrego una nueva noticia</div>",
        });
    });

    return new pubSendEmailResponse(true, "Se agrego una publicación");
  }
}
