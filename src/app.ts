import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

// using cors
app.use(cors());

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World");
});

export default app;