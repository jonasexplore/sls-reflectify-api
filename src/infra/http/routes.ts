import { Router } from "express";
import { createBoardSchema } from "@/infra/http/validators";
import {
  createBoardController,
  listBoardsController,
} from "@/application/factories/controllers";
import { SchemaValidation } from "../adapters/validation";

const router = Router();

router.get("/", listBoardsController.handle);

router.post(
  "/",
  SchemaValidation.validate(createBoardSchema),
  createBoardController.handle
);

export { router };
