import { ErrorMapper } from "@/common/error";
import { BoardRepository } from "@/infra/repositories/board";

export class GetBoardUseCase {
  constructor(private readonly repository: BoardRepository) {}

  async execute(props: { boardId: string }) {
    try {
      console.log("GetBoardUseCase > params", { ...props });

      const entity = await this.repository.get(props.boardId);

      if (!entity) {
        throw new Error("Board not found");
      }

      console.log("GetBoardUseCase > success");

      return entity;
    } catch (error) {
      console.error(ErrorMapper.map(error));
      throw error;
    }
  }
}
