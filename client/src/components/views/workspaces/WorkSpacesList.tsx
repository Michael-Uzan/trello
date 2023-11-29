import { IWorkspace } from 'interfaces/IWorkSpace';
import { WorkspacePreview } from './WorkspacePreview';

import React from 'react';

interface IPropType {
  workspaces: IWorkspace[];
}

export const WorkSpacesList = ({ workspaces }: IPropType) => {
  return (
    <div className="workspaces-list">
      {workspaces.map((workspace: IWorkspace) => (
        <WorkspacePreview
          key={workspace._id}
          workspace={workspace}
          //   list={list}
          //   currListIdx={index}
          //   onUpdateBoard={onUpdateBoard}
        />
      ))}
    </div>
  );
};
