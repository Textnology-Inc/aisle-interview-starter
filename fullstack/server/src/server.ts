import express, { Express, Request, Response } from "express";
import cors from "cors";

const startServer = async () => {
  const app: Express = express();
  app.use(express.json());
  app.use(cors());

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
  });

  return { app };
};

const port = process.env.PORT || 3000;

startServer()
  .then(({ app }) => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error starting server: ");
    console.error(err);
  });
