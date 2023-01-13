import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage'
import Home from './components/Home';
import Movies from './components/Movies'
import Movie from './components/Movie'
import Genres from './components/Genres'
import EditMovie from './components/EditMovie'
import ManageCatalouge from './components/ManageCatalouge'
import GraphQL from './components/GraphQL'
import Login from './components/Login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true, 
        element: <Home/>
      },
      {
        path: "/movies",
        element: <Movies/>,
      },
      {
        path: "/movies/:id",
        element: <Movie/>,
      },
      {
        path: "/genres",
        element: <Genres/>,
      },
      {
        path: "/admin/movie/0",
        element: <EditMovie/>,
      },
      {
        path: "/manage-catalouge",
        element: <ManageCatalouge/>,
      },
      {
        path: "/graphql",
        element: <GraphQL/>,
      },
      {
        path: "/login",
        element: <Login/>,
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
