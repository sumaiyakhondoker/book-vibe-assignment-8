import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";
import ListedBooks from "../pages/ListedBooks";
import ReadBooks from "../components/ReadBooks";

import PageToReadBarchart from "../pages/PageToReadBarchart";
import ErrorPage from "../pages/ErrorPage";
import WishlistBooks from "../components/WishlistBooks";
import Authors from "../pages/Authors";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";


export const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
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
                element: <WishlistBooks></WishlistBooks>
            }
          ]
        },
        {
          path:'/pagestoread',
          element: <PageToReadBarchart></PageToReadBarchart>,
          loader: ()=> fetch('/booksData.json')
        },
        {
          path: '/authors',
          element: <Authors></Authors>,
          loader: ()=> fetch('/authorsData.json')
        },
        {
          path: '/about',
          element: <AboutUs></AboutUs>,

        },
        {
          path: '/contact',
          element:<ContactUs></ContactUs>
        }
        
      ]  
    }
  ])