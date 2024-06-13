import { Request, Response } from "express";
import { DeleteBoardUseCase } from "../use-cases";
import { BoardRepository } from "@/infra/repositories/board";
import { HttpStatus } from "@/common/enums";

export class DeleteBoardController {
  async handle(req: Request, res: Response) {
    const repository = new BoardRepository();
    const deleteBoard = new DeleteBoardUseCase(repository);

    await deleteBoard.execute({
      boardId: req.params.boardId,
    });

    res.status(HttpStatus.NO_CONTENT).json();
  }
}
