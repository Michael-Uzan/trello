import { boardService } from 'services/board.service';
import { IBoard } from 'interfaces/IBoard';
import { BoardHeader } from 'components/views/board/BoardHeader';

import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { GenericList } from 'components/common/GenericList';
import { ListPreview } from 'components/views/board/ListPreview';

export const BoardView = () => {
  const { boardId } = useParams();
  const [board, setBoard] = useState<IBoard | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const loadBoard = async (boardId: string) => {
      try {
        const board: IBoard = await boardService.getBoardById(boardId);
        if (board) {
          setBoard(board);
        } else {
          setNotFound(true);
        }
      } catch (err) {
        // setError(true);
      }
    };

    if (boardId) {
      loadBoard(boardId);
    }
  }, [boardId]);

  if (notFound) {
    return <div>{'Not Found'}</div>;
  }

  if (!board) {
    return <div>{'Loading'}</div>;
  }

  const { title, lists } = board;

  return (
    <div className="board-view flex direction-col">
      <BoardHeader title={title} />
      <div className="board-canvas flex">
        <GenericList
          className="flex"
          items={lists}
          renderItem={(list) => <ListPreview list={list} />}
        />
      </div>
    </div>
  );
};
