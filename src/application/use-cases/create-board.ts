import dayjs from "dayjs";
import { v4 as uuid } from "uuid";

import { BoardEntity } from "@/common/entity";
import { BoardRepository } from "@/infra/repositories/board";
import { PREFIXS } from "@/common/enums";

export class CreateBoardUseCase {
  constructor(private readonly repository: BoardRepository) {}

  async execute(props: { name: string; isPublic: boolean }) {
    try {
      const id = uuid();
      const currentDate = dayjs().toISOString();

      const entity = new BoardEntity({
        PK: PREFIXS.BOARD,
        SK: `${PREFIXS.ID}-${id}`,
        Content: {
          id,
          name: props.name,
          isPublic: props.isPublic,
        },
        Created: currentDate,
        Updated: currentDate,
      });

      await this.repository.save(entity);

      return entity;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
