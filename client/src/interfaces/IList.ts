import { ICard } from './ICard';

export interface IList {
  _id?: string;
  title: string;
  cards: ICard[];
}
