import { Request, Response } from "express";
import { GetBoardUseCase } from "../use-cases";
import { BoardRepository } from "@/infra/repositories/board";
import { BoardMapper } from "@/infra/mappers/board";
import { HttpStatus } from "@/common/enums";

export class GetBoardController {
  async handle(req: Request, res: Response) {
    const repository = new BoardRepository();
    const getBoard = new GetBoardUseCase(repository);

    const entity = await getBoard.execute({
      boardId: req.params.boardId,
    });

    const data = BoardMapper.toList(entity);

    res.status(HttpStatus.OK).json(data);
  }
}
