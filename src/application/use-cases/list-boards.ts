import { ErrorMapper } from "@/common/error";
import { BoardRepository } from "@/infra/repositories/board";

export class ListBoardsUseCase {
  constructor(private readonly repository: BoardRepository) {}

  async execute() {
    try {
      console.log("ListBoardsUseCase > params", {});

      const output = await this.repository.list();

      console.log("ListBoardsUseCase > success");

      return output;
    } catch (error) {
      console.error(ErrorMapper.map(error));
      throw error;
    }
  }
}
