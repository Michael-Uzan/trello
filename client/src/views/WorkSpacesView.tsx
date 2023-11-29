import { IWorkspace } from 'interfaces/IWorkSpace';
import { workspaceService } from 'services/workspace.service';
import { LoaderWrapper } from 'components/common/LoaderWrapper';
import { WorkSpacesList } from 'components/views/workspaces/WorkSpacesList';

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

  return (
    <LoaderWrapper loading={loading} error={error}>
      <div>{'Your Workspace'}</div>
      <WorkSpacesList workspaces={workspaces} />
    </LoaderWrapper>
  );
};
