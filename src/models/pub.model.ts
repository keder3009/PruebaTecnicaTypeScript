import { Schema, model, Model } from "mongoose";

const PubModel = new Schema({
    titulo: String,
    texto: String,
    tipo: String,
    tags: Object,
    images: Object
})

export default model('pub', PubModel)