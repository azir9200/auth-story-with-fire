import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Contacts from "../Pages/Contacts/Contacts";
import Events from "../Components/AllEvents/AllEvents";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import EventCard from "../Components/EventCard/EventCard";
import PrivateRoute from "../Provider/PrivateRoute";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`/events.json`)
      },
      {
        path: '/events/:id',
        element: <PrivateRoute><EventCard></EventCard> </PrivateRoute>,
        loader: (object) => fetch(`/events.json/${object.params.id}`)
      },
      {
        path: '/events',
        element: <Events></Events>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/contact',
        element: <Contacts></Contacts>
      },

      {
        path: '/login',
        element: <Login></Login>
      },

      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  }
]);
export default Routes;