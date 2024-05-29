type CommentProps = {
  id: string;
  content: string;
  timestamp: string;
  userId: string;
};

type LikeProps = {
  id: string;
  timestamp: string;
  userId: string;
};

type CardProps = {
  id: string;
  content: string;
  userId: string;
  likes: LikeProps[];
  comments: CommentProps[];
};

type ColumnProps = {
  id: string;
  name: string;
  cards: CardProps[];
};

type ContentProps = {
  id: string;
  name: string;
  isPublic: boolean;
  userId: string;
  columns: ColumnProps[];
};

export type BoardProps = {
  PK: string;
  SK: string;
  Content: Partial<ContentProps>;
  Created: string;
  Updated: string;
};

export class BoardEntity {
  constructor(private readonly props: BoardProps) {}

  toJSON() {
    return { ...this.props };
  }

  get Key() {
    return { PK: this.props.PK, SK: this.props.SK };
  }

  get PK() {
    return this.props.PK;
  }

  set PK(value) {
    this.props.PK = value;
  }

  get SK() {
    return this.props.SK;
  }

  set SK(value) {
    this.props.SK = value;
  }

  get Content() {
    return this.props.Content;
  }

  set Content(value) {
    this.props.Content = value;
  }

  get Created() {
    return this.props.Created;
  }

  set Created(value) {
    this.props.Created = value;
  }

  get Updated() {
    return this.props.Updated;
  }

  set Updated(value) {
    this.props.Updated = value;
  }
}
