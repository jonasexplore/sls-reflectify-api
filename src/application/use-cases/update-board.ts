import { ContentProps } from "@/common/entity";
import { BoardRepository } from "@/infra/repositories/board";
import { ErrorMapper } from "@/common/error";

export class UpdateBoardUseCase {
  constructor(private readonly repository: BoardRepository) {}

  async execute(props: ContentProps) {
    try {
      console.log("UpdateBoardUseCase > params", { ...props });

      const entity = await this.repository.get(props.id);

      if (!entity) {
        throw new Error("Board not found");
      }

      Object.assign(entity.Content, props);

      await this.repository.save(entity);

      console.log("UpdateBoardUseCase > success");
    } catch (error) {
      console.error(ErrorMapper.map(error));
      throw error;
    }
  }
}
