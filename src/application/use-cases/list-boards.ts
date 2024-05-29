import { BoardRepository } from "@/infra/repositories/board";

export class ListBoardsUseCase {
  constructor(private readonly repository: BoardRepository) {}

  async execute() {
    try {
      const output = await this.repository.list();
      return output;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
