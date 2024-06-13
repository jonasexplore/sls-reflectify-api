import serverless from "serverless-http";
import express from "express";

import { router } from "./infra/http/routes";

const app = express();

app.use(express.json());
app.use("/api/boards", router);

const handler = serverless(app);

export { handler };
