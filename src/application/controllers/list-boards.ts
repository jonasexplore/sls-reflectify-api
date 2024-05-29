import { Request, Response } from "express";
import { BoardRepository } from "@/infra/repositories/board";
import { ListBoardsUseCase } from "../use-cases";
import { BoardMapper } from "@/infra/mappers/board";
import { HttpStatus } from "@/common/enums";

export class ListBoardsController {
  async handle(_: Request, res: Response) {
    const repository = new BoardRepository();
    const listBoards = new ListBoardsUseCase(repository);

    const entities = await listBoards.execute();

    const data = entities.map(BoardMapper.toList);

    res.status(HttpStatus.OK).json({ data });
  }
}
