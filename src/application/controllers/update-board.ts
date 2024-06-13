import { Request, Response } from "express";
import { UpdateBoardUseCase } from "../use-cases";
import { BoardRepository } from "@/infra/repositories/board";
import { HttpStatus } from "@/common/enums";

export class UpdateBoardController {
  async handle(req: Request, res: Response) {
    const body = req.body;

    const repository = new BoardRepository();
    const updateBoard = new UpdateBoardUseCase(repository);

    await updateBoard.execute(body);

    res.status(HttpStatus.NO_CONTENT).json();
  }
}
