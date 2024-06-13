import {
  CreateBoardController,
  DeleteBoardController,
  GetBoardController,
  ListBoardsController,
  UpdateBoardController,
} from "@/application/controllers";

export const createBoardController = new CreateBoardController();
export const deleteBoardController = new DeleteBoardController();
export const getBoardController = new GetBoardController();
export const listBoardsController = new ListBoardsController();
export const updateBoardController = new UpdateBoardController();
