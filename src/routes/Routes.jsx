import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";
import ListedBooks from "../pages/ListedBooks";
import ReadBooks from "../components/ReadBooks";
import Wishlist from "../components/Wishlist";
import PageToReadBarchart from "../pages/PageToReadBarchart";
// import PagesToRead from '../pages/PagesToRead'

export const router = createBrowserRouter([
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
          element: <BookDetails></BookDetails>,
          loader: ()=> fetch('/booksData.json')
        },
        {
          path: '/listedbooks',
          element: <ListedBooks></ListedBooks>,
          children: [
            {
                index: true,
                element: <ReadBooks></ReadBooks>,
                loader: ()=> fetch('/booksData.json')
            },
            {
                path:'wishlistbooks',
                element: <Wishlist></Wishlist>
            }
          ]
        },
        {
          path:'/pagestoread',
          element: <PageToReadBarchart></PageToReadBarchart>,
          loader: ()=> fetch('/booksData.json')
        }
        
      ]  
    }
  ])