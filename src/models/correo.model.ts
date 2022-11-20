import { Schema, model } from "mongoose";

const CorreoModel = new Schema({
    correo: String
})

export default model('correos', CorreoModel)