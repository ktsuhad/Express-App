import { Response, Router } from "express";
import { Request } from "express-serve-static-core";

const app: Router = Router();

//routing
app.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ success: true, message: "api/v1 is running successfully" });
});

export const routerv1 = app;
