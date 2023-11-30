import { IBoardPreview } from './IBoard';

export interface IWorkspace {
  _id: string;
  createdAt: number;
  name: string;
  description: string;
  members: string[];
  boards: IBoardPreview[];
}

export interface IStarredWorkspace {
  _id: string;
  name: string;
  boards: IBoardPreview[];
}
