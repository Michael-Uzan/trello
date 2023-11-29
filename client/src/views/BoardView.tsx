import { boardService } from 'services/board.service';
import { IBoard } from 'interfaces/IBoard';
import { BoardHeader } from 'components/views/board/BoardHeader';

import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { GenericList } from 'components/common/GenericList';
import { ListPreview } from 'components/views/board/ListPreview';
import { LoaderWrapper } from 'components/common/LoaderWrapper';

export const BoardView = () => {
  const { boardId } = useParams();
  const [board, setBoard] = useState<IBoard>({} as IBoard);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const loadBoard = async (boardId: string) => {
      try {
        setLoading(true);
        const board: IBoard = await boardService.getBoardById(boardId);
        if (board) {
          setBoard(board);
        } else {
          setNotFound(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (boardId) {
      loadBoard(boardId);
    }
  }, [boardId]);

  if (notFound) {
    return <div>{'Not Found'}</div>;
  }

  const { title, lists } = board || {};

  return (
    <LoaderWrapper
      className="board-view flex direction-col"
      loading={loading}
      error={error}
    >
      <BoardHeader title={title} />
      <div className="board-canvas flex">
        <GenericList
          className="flex"
          items={lists}
          renderItem={(list) => <ListPreview list={list} />}
        />
      </div>
    </LoaderWrapper>
  );
};
