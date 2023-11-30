import { BoardPreview } from './BoardPreview';
import { IStarredWorkspace, IWorkspace } from 'interfaces/IWorkSpace';
import { GenericList } from 'components/common/GenericList';

import React from 'react';

interface IPropType {
  workspace: IWorkspace | IStarredWorkspace;
}

export const WorkspacePreview = ({ workspace }: IPropType) => {
  const { boards } = workspace;

  return (
    <div className="workspace-preview">
      <h3 className="bold">{workspace.name}</h3>
      <GenericList
        className="boards-list"
        items={boards}
        renderItem={(board) => <BoardPreview board={board} />}
      />
    </div>
  );
};
