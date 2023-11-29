import { asincStorageService } from './asyncStorage.service';
import { IWorkspace } from 'interfaces/IWorkSpace';

export const workspaceService = {
  getWorkspaceById,
  query,
  //   get,
  //   post,
  //   put,
  //   remove,
  //   postMany,
  //   save,
};

function getWorkspaceById(workspaceId: string): Promise<IWorkspace> {
  return asincStorageService.get('workspaces', workspaceId);
  //   return httpService.get(`boards/${boardId}`, { filterBy: filterBy });
}

function query(): Promise<IWorkspace[]> {
  return asincStorageService.query('workspaces');
}
