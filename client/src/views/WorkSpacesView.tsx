import { IStarredWorkspace, IWorkspace } from 'interfaces/IWorkSpace';
import { workspaceService } from 'services/workspace.service';
import { LoaderWrapper } from 'components/common/LoaderWrapper';
import { GenericList } from 'components/common/GenericList';
import { WorkspacePreview } from 'components/views/workspaces/WorkspacePreview';

import React, { useEffect, useState } from 'react';

export const WorkspacesView = () => {
  const [workspaces, setWorkspaces] = useState<IWorkspace[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const loadWorkspaces = async () => {
      try {
        setLoading(true);
        const workspaces: IWorkspace[] = await workspaceService.query();
        setWorkspaces(workspaces);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadWorkspaces();
  }, []);

  const filterStarredBoards = getFilterStarredBoards(workspaces);

  return (
    <LoaderWrapper className="workspaces-view" loading={loading} error={error}>
      <div className="menu-bar"></div>
      <div className="workspaces-wrapper">
        {filterStarredBoards.boards.length ? (
          <GenericList
            className="workspaces-list"
            items={[filterStarredBoards]}
            renderItem={(workspace) => (
              <WorkspacePreview workspace={workspace} />
            )}
          />
        ) : null}
        <h3 className="workspaces-view-title fs16 bold">{'Your Workspace'}</h3>
        <GenericList
          className="workspaces-list"
          items={workspaces}
          renderItem={(workspace) => <WorkspacePreview workspace={workspace} />}
        />
      </div>
    </LoaderWrapper>
  );
};

function getFilterStarredBoards(workspaces: IWorkspace[]): IStarredWorkspace {
  const result: IStarredWorkspace = {
    _id: 'starredBoard',
    name: 'Starred boards',
    boards: [],
  };

  workspaces.forEach((workspace) =>
    workspace.boards.forEach((board) => {
      if (board.starred) {
        result.boards.push(board);
      }
    }),
  );

  return result;
}
