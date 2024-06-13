import { ErrorMapper } from "@/common/error";
import { BoardRepository } from "@/infra/repositories/board";

export class DeleteBoardUseCase {
  constructor(private readonly repository: BoardRepository) {}

  async execute(props: { boardId: string }) {
    try {
      console.log("DeleteBoardUseCase > params", { ...props });

      const entity = await this.repository.get(props.boardId);

      if (!entity) {
        throw new Error("Board not found");
      }

      await this.repository.delete(entity);

      console.log("DeleteBoardUseCase > success");
    } catch (error) {
      console.error(ErrorMapper.map(error));
      throw error;
    }
  }
}
