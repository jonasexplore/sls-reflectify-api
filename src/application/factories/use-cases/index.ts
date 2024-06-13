import {
  CreateBoardUseCase,
  DeleteBoardUseCase,
  GetBoardUseCase,
  ListBoardsUseCase,
  UpdateBoardUseCase,
} from "@/application/use-cases";
import { BoardRepository } from "@/infra/repositories/board";

const repository = new BoardRepository();

export const createBoardUseCase = new CreateBoardUseCase(repository);
export const deleteBoardUseCase = new DeleteBoardUseCase(repository);
export const getBoardUseCase = new GetBoardUseCase(repository);
export const listBoardsUseCase = new ListBoardsUseCase(repository);
export const updateBoardUseCase = new UpdateBoardUseCase(repository);
