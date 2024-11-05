import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './pages/Home.jsx';
import ListedBooks from './pages/ListedBooks.jsx';
import PagesToRead from './pages/PagesToRead.jsx';
import BookDetails from './pages/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/booksData.json')
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>
      },
      {
        path: '/listedbooks',
        element: <ListedBooks></ListedBooks>
      },
      {
        path:'/pagestoread',
        element: <PagesToRead></PagesToRead>
      }
      
    ]  
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
