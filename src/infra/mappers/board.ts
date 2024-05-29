import { BoardEntity } from "@/common/entity";

export class BoardMapper {
  static toList(entity: BoardEntity) {
    const props = entity.toJSON();

    return {
      ...props.Content,
      created: props.Created,
      updated: props.Updated,
    };
  }
}
