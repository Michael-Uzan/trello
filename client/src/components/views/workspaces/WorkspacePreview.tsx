import { IWorkspace } from 'interfaces/IWorkSpace';
import { BoardsList } from './BoardsList';

import React from 'react';

interface IPropType {
  workspace: IWorkspace;
}

export const WorkspacePreview = ({ workspace }: IPropType) => {
  const { boards } = workspace;

  return (
    <div>
      <div>{workspace.name}</div>
      <BoardsList boards={boards} />
    </div>
  );
};
