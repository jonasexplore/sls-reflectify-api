import {
  DeleteItemCommand,
  DynamoDB,
  GetItemCommand,
  PutItemCommand,
  QueryCommand,
} from "@aws-sdk/client-dynamodb";
import { config } from "@/config";
import { BoardEntity, BoardProps } from "@/common/entity";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { PREFIXS } from "@/common/enums";

export class BoardRepository {
  private client: DynamoDB;
  private tableName: string;

  constructor() {
    this.client = new DynamoDB({ region: config.aws.region });
    this.tableName = config.aws.tableName;
  }

  async list() {
    const command = new QueryCommand({
      TableName: this.tableName,
      ExpressionAttributeNames: { "#PK": "PK", "#SK": "SK" },
      ExpressionAttributeValues: marshall({
        ":PK": PREFIXS.BOARD,
        ":SK": PREFIXS.ID,
      }),
      KeyConditionExpression: "#PK = :PK and begins_with(#SK, :SK)",
    });

    const output = await this.client.send(command);

    if (!output.Items?.length) {
      return [];
    }

    return output.Items?.map(
      (item) => new BoardEntity(unmarshall(item) as BoardProps)
    );
  }

  async get(id: string) {
    const command = new GetItemCommand({
      TableName: this.tableName,
      Key: marshall({
        PK: PREFIXS.BOARD,
        SK: `${PREFIXS.ID}-${id}`,
      }),
    });

    const output = await this.client.send(command);

    if (!output.Item) {
      return undefined;
    }

    return new BoardEntity(unmarshall(output.Item) as BoardProps);
  }

  async save(entity: BoardEntity) {
    const command = new PutItemCommand({
      TableName: this.tableName,
      Item: marshall(entity.toJSON()),
    });

    await this.client.send(command);
  }

  async delete(entity: BoardEntity) {
    const command = new DeleteItemCommand({
      TableName: this.tableName,
      Key: marshall(entity.Key),
    });

    await this.client.send(command);
  }
}
