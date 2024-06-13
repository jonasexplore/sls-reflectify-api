import { Router } from "express";
import { createBoardSchema } from "@/infra/http/validators";
import {
  createBoardController,
  deleteBoardController,
  getBoardController,
  listBoardsController,
  updateBoardController,
} from "@/application/factories/controllers";
import { Schema } from "../adapters/validation";

const router = Router();

router.get("/", listBoardsController.handle);
router.get("/:boardId", getBoardController.handle);
router.put("/:boardId", updateBoardController.handle);
router.delete("/:boardId", deleteBoardController.handle);
router.post(
  "/",
  Schema.validate(createBoardSchema),
  createBoardController.handle
);

export { router };
