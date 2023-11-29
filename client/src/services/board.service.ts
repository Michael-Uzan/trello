import { asincStorageService } from './asyncStorage.service';
import { IBoard } from 'interfaces/IBoard';

export const boardService = {
  getBoardById,
  // query,
  //   get,
  //   post,
  //   put,
  //   remove,
  //   postMany,
  //   save,
};

function getBoardById(boardId: string): Promise<IBoard> {
  return asincStorageService.get('boards', boardId);
  //   return httpService.get(`boards/${boardId}`, { filterBy: filterBy });
}
