import { BoardPreview } from './BoardPreview';
import { IWorkspace } from 'interfaces/IWorkSpace';
import { GenericList } from 'components/common/GenericList';

import React from 'react';

interface IPropType {
  workspace: IWorkspace;
}

export const WorkspacePreview = ({ workspace }: IPropType) => {
  const { boards } = workspace;

  return (
    <div>
      <div>{workspace.name}</div>
      <GenericList
        className="boards-list"
        items={boards}
        renderItem={(board) => <BoardPreview board={board} />}
      />
    </div>
  );
};
