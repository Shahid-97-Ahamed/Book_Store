import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/home";
import Book from "../pages/book/Book";
import ErrorHandel from "../components/errorhandel/ErrorHandel";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[{
      index:true,Component:Home,
    },
    {
      path:"/books",
      Component:Book
    },
    ],
    errorElement:<ErrorHandel></ErrorHandel>
   
  },
]);