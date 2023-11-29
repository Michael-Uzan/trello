import { IWorkspace } from 'interfaces/IWorkSpace';
import { workspaceService } from 'services/workspace.service';
import { LoaderWrapper } from 'components/common/LoaderWrapper';

import React, { useEffect, useState } from 'react';
import { GenericList } from 'components/common/GenericList';
import { WorkspacePreview } from 'components/views/workspaces/WorkspacePreview';

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
      <GenericList
        className="workspaces-list"
        items={workspaces}
        renderItem={(workspace) => <WorkspacePreview workspace={workspace} />}
      />
    </LoaderWrapper>
  );
};
