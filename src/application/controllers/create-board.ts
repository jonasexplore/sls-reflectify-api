import { Request, Response } from "express";
import { CreateBoardUseCase } from "../use-cases";
import { BoardRepository } from "@/infra/repositories/board";
import { BoardMapper } from "@/infra/mappers/board";
import { HttpStatus } from "@/common/enums";

export class CreateBoardController {
  async handle(req: Request, res: Response) {
    const body = req.body;

    const repository = new BoardRepository();
    const createBoard = new CreateBoardUseCase(repository);

    const entity = await createBoard.execute({
      name: body.name,
      isPublic: body.isPublic,
    });

    const data = BoardMapper.toList(entity);

    res.status(HttpStatus.CREATED).json(data);
  }
}
