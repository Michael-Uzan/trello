import { BoardApp } from '../pages/BoardApp';
// import { HomePage } from "./pages/HomePage";
// import { Login } from "./pages/Login";
// import { Signup } from "./pages/Signup";
// import { TemplateBoards } from "./pages/TemplateBoards";
// import { UserBoards } from "./pages/UserBoards";
// import { CardNotFound } from "./pages/CardNotFound";

// import { CardDetails } from "./pages/CardDetails";

import { useRoutes } from 'react-router-dom';
import React from 'react';

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/b/:boardId',
      element: <BoardApp />,
    },
    // {
    //     path: '/boards',
    //     component: UserBoards,
    // },
    // {
    //     path: '/cardNotFound',
    //     component: CardNotFound,
    // },
    // {
    //     path: '/templates',
    //     component: TemplateBoards,
    // },
    // {
    //     path: '/login',
    //     component: Login,
    // },
    // {
    //     path: '/signup',
    //     component: Signup,
    // },
    // {
    //     path: '/',
    //     component: HomePage,
    // }
  ]);

  return routes;
};
