import { asincStorageService } from './asyncStorage.service';

export const boardService = {
  getBoardById,
  //   get,
  //   query,
  //   post,
  //   put,
  //   remove,
  //   postMany,
  //   save,
};

function getBoardById(boardId: string) {
  return asincStorageService.get(`boards`, boardId);
  //   return httpService.get(`boards/${boardId}`, { filterBy: filterBy });
}
