import { IList } from './IList';

export interface IBoard {
  _id?: string;
  createdAt: number;
  title: string;
  lists: IList[];
}
