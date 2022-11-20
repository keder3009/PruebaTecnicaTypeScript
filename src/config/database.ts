import mongoose from "mongoose";

import { mongoDb } from "./keys";

mongoose
  .connect(mongoDb.URI)
  .then((db) => console.log("database is connect"))
  .catch((err) => {
    console.log(err);
  });
