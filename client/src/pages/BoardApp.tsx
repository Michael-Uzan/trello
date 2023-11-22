import { boardService } from '../services/board.service';
import { IBoard } from '../interfaces/IBoard';
import { BoardLists } from '../components/BoardLists';
import { BoardHeader } from '../components/BoardHeader';

import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export const BoardApp = () => {
  const { boardId } = useParams();
  const [board, setBoard] = useState<IBoard | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const loadBoard = async (boardId: string) => {
      console.log('boardId: ', boardId);
      // setLoading(true);
      try {
        const board: IBoard = await boardService.getBoardById(boardId);
        console.log('board: ', board);
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
    <div className="board-app flex direction-col">
      <BoardHeader title={title} />
      <div className="board-canvas flex">
        <BoardLists lists={lists} />
      </div>
    </div>
  );
};
