import { IList } from './IList';

export interface IBoard {
  _id: string;
  createdAt: number;
  title: string;
  lists: IList[];
  starred: boolean;
  workspaceId: string;
  members: string[];
  background: IBoardBackground;
}

export interface IBoardPreview {
  _id: string;
  title: string;
  background: IBoardBackground;
  starred: boolean;
}

interface IBoardBackground {
  color: string;
  imgUrl: string;
}
