import React, { useEffect, useState } from 'react';
import { boardService } from '../services/board.service';
import { useParams } from 'react-router-dom';
import { IBoard } from '../interfaces/IBoard';

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
    return <div>{'loading'}</div>;
  }

  return <div>{board.title}</div>;
};
