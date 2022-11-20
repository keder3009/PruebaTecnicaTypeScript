"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const keys_1 = require("./keys");
mongoose_1.default
    .connect(keys_1.mongoDb.URI)
    .then((db) => console.log("database is connect"))
    .catch((err) => {
    console.log(err);
});
