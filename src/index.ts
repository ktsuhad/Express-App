import express, { Express } from "express";
import dotenv from "dotenv";
import { routerv1 } from "./router/v1/app";
import { Request, Response } from "express-serve-static-core";

dotenv.config(); //dotenv config
const PORT = process.env.PORT || 3000; //port declaration

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ success: true, message: "server is running successfully" });
});

app.use("/api/v1", routerv1)

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
